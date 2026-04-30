# Image Workflow Guide

Use this folder structure so originals remain safe and web assets stay fast.

## Folder purpose

- `assets/images/originals/`
  - Put all client-supplied full-resolution files here.
  - Keep these untouched.
  - Treat this folder as a local source library; only commit `.gitkeep` unless you intentionally want the raw files versioned.

- `assets/images/web/`
  - Store web-optimized images used for hero, featured carousel, and full-size gallery views.

- `assets/images/thumbnails/`
  - Store smaller optimized files for cards, grids, and previews.

## Recommended export sizes

- Large web images: `1600px` wide, WebP
- Medium web images: `1000px` wide, WebP
- Thumbnails/cards: `600px` wide, WebP

## File naming

Use descriptive names, for example:
- `portrait-soft-windowlight-01.webp`
- `couples-sunset-beach-02.webp`
- `editorial-studio-shadow-01.webp`

Avoid names like `IMG_1234.webp` in final web folders.

## Where the site reads images from

- `index.html` references static placeholders for hero/session visuals.
- `script.js` data arrays power the main dynamic galleries:
  - `featuredSlides`
  - `galleryItems`

Update `src` values in those arrays when real images are ready.

## Alt text guidance

Add clear, specific alt text in `script.js` for each image object.
Describe what is meaningful in the photo rather than using generic text like “photo 1”.
