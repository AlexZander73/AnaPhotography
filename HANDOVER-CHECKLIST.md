# Website Handover Checklist

Use this as the short version of the handover.

## First ownership checks

Make sure these are under your control:

- your website domain
- your DNS settings
- your hosting account
- the Google Form connected to the contact form
- your Instagram and business contact details

## Choose how you want to host the site

Pick one:

1. Keep it on GitHub Pages
2. Clone or copy it into your own GitHub account
3. Host it on Cloudflare Pages

If you want the easiest option, keep it on GitHub Pages.

If you want full ownership, move it into your own GitHub account or your own Cloudflare account.

## Make a backup first

Before changing anything:

- save a full copy of the website folder
- keep your original photos backed up separately

## Test the site locally

Before publishing changes:

1. Open `index.html`
2. Click through the pages
3. Check the contact form
4. Check the portfolio
5. Check the footer links

## Easiest way to update photos

1. Put full-size photos into `assets/images/originals/`
2. Double-click `process-images.command`
3. Reopen `index.html`
4. Check the portfolio

Important:

- running the image processor refreshes the portfolio from whatever is currently inside `assets/images/originals/`

## Easiest way to update text

Open:

- `index.html`

This is where you can change:

- page wording
- service text
- prices
- About Me text
- footer wording

## If you want to use your own domain on GitHub Pages

1. Open the repository on GitHub
2. Go to `Settings`
3. Open `Pages`
4. Add your custom domain
5. Update your DNS records with your domain provider
6. Wait for DNS to update
7. Turn on HTTPS once GitHub allows it

## If you want to host on Cloudflare Pages

1. Log in to Cloudflare
2. Go to `Workers & Pages`
3. Create a Pages project
4. Choose `Direct Upload`
5. Upload the site files
6. Add your domain

## Things that are safe to change yourself

- text in `index.html`
- prices
- photos
- portfolio images
- Instagram link
- footer wording

## Things to get help with if unsure

- DNS changes
- moving hosting providers
- changing the contact form structure
- replacing Google Forms
- redesigning the layout

## Good final check before launch

Before going live, make sure:

- the domain points to the right place
- the site loads on phone and desktop
- images load correctly
- the contact form still submits
- the text is final
- the legal pages still open correctly
