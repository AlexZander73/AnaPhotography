# Image Folder Guide

This folder system is set up to keep your original photos safe while also keeping the website fast.

## What goes where

### `assets/images/originals/`

Put your full-size original photos here.

Use this folder as your safe source folder.

Do not use these large originals directly on the website.

### `assets/images/web/`

Put your website-ready images here.

These are the main files used for:

- hero images
- service images
- gallery images
- About Me background image

### `assets/images/thumbnails/`

Put smaller versions of your photos here.

These are useful for:

- cards
- smaller gallery previews
- lighter page loading

## Recommended export sizes

- large website images: `1600px` wide, WebP
- medium website images: `1000px` wide, WebP
- smaller thumbnails: `600px` wide, WebP

## File naming tips

Use simple names like:

- `business-portrait-01.webp`
- `couple-beach-sunset-02.webp`
- `event-launch-01.webp`

Avoid:

- very long names
- random camera names like `IMG_4837`
- spaces if possible

## Where the website reads images from

The website gets images from two places:

- `index.html`
  - for fixed page images like hero cards and service photos
- `script.js`
  - for the portfolio gallery list

## Good habit

Whenever you add new website images:

1. keep the originals in `originals/`
2. export smaller web versions into `web/`
3. export smaller preview versions into `thumbnails/`
4. then update the file paths in `index.html` or `script.js`
