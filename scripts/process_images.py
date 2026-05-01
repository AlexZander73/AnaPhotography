from __future__ import annotations

import json
import re
import sys
import unicodedata
from pathlib import Path

from PIL import Image, ImageOps


ROOT = Path(__file__).resolve().parents[1]
ORIGINALS_DIR = ROOT / "assets" / "images" / "originals"
WEB_DIR = ROOT / "assets" / "images" / "web"
THUMB_DIR = ROOT / "assets" / "images" / "thumbnails"
GALLERY_DATA_FILE = ROOT / "gallery-data.js"

WEB_MAX_SIZE = 1600
THUMB_MAX_SIZE = 600
SUPPORTED_EXTENSIONS = {".jpg", ".jpeg", ".png", ".webp", ".tif", ".tiff", ".bmp", ".heic", ".heif"}


def slugify(text: str) -> str:
    text = unicodedata.normalize("NFKD", text).encode("ascii", "ignore").decode("ascii")
    text = text.lower()
    text = re.sub(r"[^a-z0-9]+", "-", text)
    text = re.sub(r"-{2,}", "-", text).strip("-")
    return text or "photo"


def title_from_filename(path: Path) -> str:
    name = path.stem.replace("_", " ").replace("-", " ")
    name = re.sub(r"\s+", " ", name).strip()
    if not name:
        return "Portfolio image"
    return name.title()


def mood_from_path(path: Path) -> str:
    if len(path.parts) > 1:
        return path.parts[0].replace("_", " ").replace("-", " ").title()
    return "Gallery"


def span_from_size(width: int, height: int) -> int:
    if not width or not height:
        return 36

    ratio = width / height

    if ratio >= 1.28:
        return 28
    if ratio <= 0.82:
        return 45
    return 36


def unique_slug(base_slug: str, used: set[str]) -> str:
    candidate = base_slug
    index = 2
    while candidate in used:
        candidate = f"{base_slug}-{index}"
        index += 1
    used.add(candidate)
    return candidate


def export_webp(source: Path, destination: Path, max_size: int) -> tuple[int, int]:
    with Image.open(source) as image:
        image = ImageOps.exif_transpose(image)
        size_before = image.size
        if image.mode not in {"RGB", "RGBA"}:
            image = image.convert("RGB")
        image.thumbnail((max_size, max_size))
        destination.parent.mkdir(parents=True, exist_ok=True)
        image.save(destination, format="WEBP", quality=86, method=6)
        return size_before


def build_gallery_items() -> list[dict[str, object]]:
    if not ORIGINALS_DIR.exists():
        raise FileNotFoundError(f"Originals folder not found: {ORIGINALS_DIR}")

    image_files = sorted(
        [
            path
            for path in ORIGINALS_DIR.rglob("*")
            if path.is_file() and path.suffix.lower() in SUPPORTED_EXTENSIONS and not path.name.startswith(".")
        ],
        key=lambda path: str(path.relative_to(ORIGINALS_DIR)).lower(),
    )

    if not image_files:
        raise RuntimeError("No supported image files were found in assets/images/originals/")

    gallery_items: list[dict[str, object]] = []
    used_slugs: set[str] = set()

    for source in image_files:
        relative_path = source.relative_to(ORIGINALS_DIR)
        base_slug = slugify("-".join(relative_path.with_suffix("").parts))
        slug = unique_slug(f"library-{base_slug}", used_slugs)

        web_output = WEB_DIR / f"{slug}.webp"
        thumb_output = THUMB_DIR / f"{slug}.webp"

        original_width, original_height = export_webp(source, web_output, WEB_MAX_SIZE)
        export_webp(source, thumb_output, THUMB_MAX_SIZE)

        gallery_items.append(
            {
                "src": f"assets/images/web/{web_output.name}",
                "alt": f"Portfolio image: {title_from_filename(relative_path)}",
                "category": "Portfolio",
                "mood": mood_from_path(relative_path),
                "span": span_from_size(original_width, original_height),
            }
        )

    return gallery_items


def write_gallery_data(items: list[dict[str, object]]) -> None:
    payload = json.dumps(items, indent=2)
    content = (
        "// Auto-generated from assets/images/originals/ by scripts/process_images.py\n"
        "// Safe to replace by running process-images.command again.\n"
        f"window.SITE_GALLERY_ITEMS = {payload};\n"
    )
    GALLERY_DATA_FILE.write_text(content, encoding="utf-8")


def main() -> int:
    try:
        gallery_items = build_gallery_items()
        write_gallery_data(gallery_items)
    except Exception as error:
        print(f"Image processing failed: {error}")
        return 1

    print(f"Processed {len(gallery_items)} image(s).")
    print(f"Web images saved to: {WEB_DIR}")
    print(f"Thumbnail images saved to: {THUMB_DIR}")
    print(f"Gallery data updated: {GALLERY_DATA_FILE}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
