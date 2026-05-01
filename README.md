# Behmen Studio Website Guide

This website is ready to run as a simple static site.

You do not need a database, app, or special software to update the wording or swap photos.

## What this website includes

- Home page with hero section
- Services section
- Portfolio gallery with filters and lightbox
- Contact form connected to Google Forms
- About Me section near the bottom
- Footer with Instagram, legal links, and designer credit

## The main files you may want to edit

- `index.html`
  - Main page text
  - Services text and prices
  - Contact section wording
  - About Me wording
- `script.js`
  - Portfolio image list
  - Portfolio filters
  - Google Form link settings
- `assets/images/web/`
  - Main website images
- `assets/images/thumbnails/`
  - Smaller images used in cards and gallery previews

If you only want to update photos and wording, you usually do not need to edit `styles.css`.

## Easiest way to preview the website

Open `index.html` in your browser.

That is enough for normal checking after text or photo changes.

## Simple update guide

### 1. Change text on the page

Open `index.html` in a text editor.

This is where you can update:

- homepage headline
- service descriptions
- service prices
- contact section text
- About Me text
- footer wording

Tip: use your editor's search feature to find the exact words you want to replace.

### 2. Change the photos

There are three image folders:

- `assets/images/originals/`
  - keep your full-size original photos here
  - do not use these directly on the live website
- `assets/images/web/`
  - use these for the main website images
- `assets/images/thumbnails/`
  - use these for smaller gallery and card images

Recommended export sizes:

- large website images: around `1600px` wide, WebP
- medium website images: around `1000px` wide, WebP
- thumbnails: around `600px` wide, WebP

### 3. Change the portfolio gallery

Open `script.js`.

Search for:

- `const galleryItems = [`

This is the main portfolio list.

Each photo entry includes:

- `src` = the image file path
- `alt` = short description of the image
- `category` = what type of shoot it is
- `mood` = what filter it appears under
- `span` = how tall it appears in the gallery layout

If you want to:

- add a photo: copy one entry and change the details
- remove a photo: delete one entry
- replace a photo: change the `src` and `alt`

### 4. Change the hero and other fixed images

Some images are not controlled by the portfolio list.

These are edited directly in `index.html` or `styles.css`.

Current important image spots:

- Hero background:
  - `assets/images/web/hero-main.webp`
- Three floating hero photos:
  - `assets/images/web/hero-card-01.webp`
  - `assets/images/web/hero-card-02.webp`
  - `assets/images/web/hero-card-03.webp`
- Services section images:
  - directly listed inside `index.html`
- About Me background image at the bottom:
  - search in `styles.css` for:
  - `library-26portfolio-ev-beispiele-64.webp`

### 5. Change the contact form

The contact form on the page already sends submissions into Google Forms.

If you only want to keep using the same Google Form, you do not need to change anything.

If you ever replace the Google Form with a different one:

- open `script.js`
- update:
  - `GOOGLE_FORM_URL`
  - `GOOGLE_FORM_POST_URL`
- the field names in `index.html` may also need to be changed to match the new form

If the Google Form itself is changed a lot, this is the point where it is best to ask for technical help.

## Safe editing checklist

These are safe updates for a non-technical user:

- replace page text in `index.html`
- change service prices in `index.html`
- swap images in `assets/images/web/`
- update the portfolio list in `script.js`
- update Instagram or footer wording in `index.html`

These are more technical changes:

- editing `styles.css`
- changing the Google Form field structure
- changing JavaScript logic
- changing legal page structure

## Before replacing photos

Good habits:

- keep a backup copy of the full project folder
- keep your original photos untouched in `assets/images/originals/`
- use clear file names
- avoid giant image files on the live site

## Before publishing changes

Check these:

- the page opens normally
- images load correctly
- text has no spelling mistakes
- the contact form still works
- the portfolio filters still work
- the footer links still work

## Helpful note if you get stuck

If you ask someone else to help later, tell them:

- this is a plain HTML/CSS/JavaScript website
- the contact form posts into Google Forms
- the main content file is `index.html`
- the portfolio gallery list is in `script.js`

## Credits

- Website design and development: [Zach Mackay](https://alexzander73.github.io/index.html)
- Photography copyright and brand content: Anastasiya Behmenburg
