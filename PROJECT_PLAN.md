# PROJECT_PLAN

## Scope
Build first complete version of a static photography portfolio + booking website for GitHub Pages with elegant, image-led sales flow and placeholder assets/copy ready for client replacement.

## Tasks completed
- Created project structure:
  - `index.html`
  - `styles.css`
  - `script.js`
  - `README.md`
  - `assets/README-images.md`
  - `assets/images/originals/`
  - `assets/images/web/`
  - `assets/images/thumbnails/`
  - `assets/icons/`
- Built sticky navigation with:
  - Brand placeholder
  - Required nav links
  - CTA button
  - Mobile menu toggle and animation
  - Scroll-state glass/blur styling
- Built hero section with:
  - Required kicker/headline/subheadline
  - Dual CTA buttons
  - Layered frame cards
  - Grain texture overlay
  - Slow background movement animation
- Added trust/vibe badges section
- Added intro storytelling section with framed image treatment
- Implemented signature featured carousel:
  - JS-driven `featuredSlides` array
  - Prev/next controls
  - Dot indicators
  - Keyboard arrow support
  - Swipe support
  - Caption + metadata display
- Implemented mood gallery section:
  - JS-driven `galleryItems` array
  - Filter buttons (All/Soft/Bold/Romantic/Editorial/Candid/Moody)
  - Masonry-inspired CSS grid via dynamic spans
  - Hover zoom
  - Click-to-open lightbox
  - Lightbox close/prev/next + Escape support
  - Swipe support in lightbox
- Added photoshoot experience section with 4-step flow cards
- Replaced the original session-types block with a 3-column `Services` section:
  - Business Portrait
  - Personal Photography
  - Event / Commercial
  - Included pricing lines and enquiry CTAs
- Added featured offer/booking CTA section
- Added contact section using Google Form button flow + visible note
- Added placeholder testimonials (JS-driven)
- Added FAQ accordion (JS-driven) with `aria-expanded`
- Added final CTA section
- Added footer with placeholders and JS-generated current year
- Added SEO basics and Open Graph placeholders in `index.html`
- Added accessibility features:
  - Skip link
  - Semantic sections/headings
  - Keyboard-focus styles
  - Keyboard-friendly controls
  - Reduced-motion support
- Added image error fallback styling so missing placeholder images still look intentional
- Added centralized booking-link logic:
  - `GOOGLE_FORM_URL` constant in `script.js`
  - Applied to all `.booking-link` / `[data-booking-link]` elements
  - Console warning if placeholder URL remains
- Updated `GOOGLE_FORM_URL` to live short link:
  - `https://forms.gle/YRux1aAa2SjVNpq47`
- Exported selected client-supplied originals into optimized site assets:
  - `assets/images/web/*.webp`
  - `assets/images/thumbnails/*.webp`
  - Reused real image exports for hero, gallery, session cards, OG image, and final CTA
- Kept `assets/images/originals/` as a local source folder rather than pushing the full raw library into the static site repo

## Tasks remaining
- Replace all placeholder images with real exported photography assets
- Replace placeholder copy with finalized brand voice where desired
- Replace booking/contact placeholders (email, Instagram, location)
- Update canonical and Open Graph production URLs
- Optional: add favicon/social assets in `assets/icons/`

## Known placeholders
- Brand: `Studio Name`
- Email: `hello@replace-with-real-email.com`
- Instagram: `@replace-with-real-handle`
- Service area/location text placeholders
- Canonical URL: `https://example.com/replace-with-live-url`
- Placeholder testimonials and some FAQ answer details
- Some filenames still use placeholder-oriented names for compatibility with current markup, even though the assets now point to real images

## Where to replace images
- `index.html`
  - Hero background image path (`hero-main.webp` in CSS)
  - Hero card images (`hero-card-01..03.webp`)
  - Intro image (`intro-story.webp`)
  - Session card thumbnails (`session-*.webp`)
  - Final CTA background (`final-cta-placeholder.webp` in CSS)
- `script.js`
  - `featuredSlides[].src`
  - `galleryItems[].src`

## Where to replace copy
- `index.html`
  - Headline/subheadline/body copy across sections
  - Contact details
  - Footer tagline/location text
- `script.js`
  - `testimonials` array
  - `faqs` array
  - Gallery captions/alts/mood text

## Where to add the Google Form link
- `script.js`
  - Current value:
    - `const GOOGLE_FORM_URL = "https://forms.gle/YRux1aAa2SjVNpq47";`
- No HTML changes required once this constant is updated.

## Assumptions made
- Website is single-page static (no backend, no build tooling).
- Placeholder image files may not exist yet, so visual fallback states are acceptable in first version.
- Session/pricing details are not final, so offer/pricing remains generic.
- Real testimonials are not available yet, so clearly marked placeholders are used.
- Google Form is the current booking flow, with future custom form intentionally deferred.
