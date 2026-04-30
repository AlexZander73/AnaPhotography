# Studio Name Photography Website

Static, mobile-first photography portfolio and booking website built with plain HTML, CSS, and vanilla JavaScript.

## Project overview

This site is designed as an elegant, image-led booking funnel for a solo photographer or boutique studio.

It includes:
- Sticky glassy navigation with mobile menu
- Full-screen hero and repeated booking CTAs
- Trust/vibe badges
- Storytelling intro block
- Signature featured carousel
- Filterable mood-based gallery with lightbox
- Photoshoot experience steps
- Session type cards
- Offer/booking section
- Testimonials placeholders
- FAQ accordion
- Contact/booking section (Google Form link)
- Final CTA and footer

## How to preview locally

1. Open `index.html` directly in your browser, or
2. Serve locally from this folder with a simple static server if preferred.

No build tools or backend are required.

## How to replace images

1. Add original client images to:
   - `assets/images/originals/`
2. Export web-ready versions into:
   - `assets/images/web/`
3. Export smaller card/thumb versions into:
   - `assets/images/thumbnails/`
4. Update image paths in:
   - `index.html` (hero, intro, session cards, final CTA placeholders)
   - `script.js` data arrays (`featuredSlides`, `galleryItems`)

More detailed image handling instructions are in `assets/README-images.md`.

## How to update gallery data

All core gallery content is data-driven in `script.js`.

- `featuredSlides`: controls the large signature carousel.
- `galleryItems`: controls the mood-filtered gallery grid and lightbox.
- `testimonials`: placeholder testimonial cards.
- `faqs`: FAQ accordion items.

Each gallery item should include:
- `src`
- `alt`
- `category`
- `mood`
- `caption`
- `span` (optional masonry height span)

## How to replace Google Form link

In `script.js`, replace:

```js
const GOOGLE_FORM_URL = "https://forms.gle/YRux1aAa2SjVNpq47";
```

All booking buttons/links using `data-booking-link` or `.booking-link` automatically use this constant and open in a new tab.

## Deploy to GitHub Pages

1. Push this folder to a GitHub repository.
2. In GitHub repo settings, open **Pages**.
3. Set source to the main branch root (or `/docs` if you move files there).
4. Save and wait for deployment.
5. Replace canonical/OG URLs in `index.html` with your live domain.

## Notes for future improvements

- Add real pricing/packages once approved
- Replace testimonial placeholders with approved client quotes
- Embed Google Form or add custom form-to-Google-Forms workflow
- Add booking calendar integration
- Add blog/recent shoots section
- Add client proofing gallery flow
- Add Instagram feed only if API/privacy/legal handling is acceptable
