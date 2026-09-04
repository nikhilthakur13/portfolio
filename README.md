# Nikhil Thakur Advanced Portfolio — V2

This version is based on the information in Nikhil Thakur's resume and is intentionally self-contained.

The portfolio includes:

- Responsive portfolio UI
- Responsive CSS
- Animations
- JavaScript functionality

All portfolio UI, CSS, animations, and JavaScript are contained inside `index.html`.

## Run Locally

1. Open the `site` folder in VS Code.
2. Open `index.html` using **Live Server** for the full PWA experience.
3. You can also open `index.html` directly in a browser. The UI will still render because the CSS and JavaScript are embedded inside the file.

## Deploy

Upload the entire `site` folder to any static hosting platform such as:

- GitHub Pages
- Vercel
- Netlify
- Any other HTTPS static host

> **Important:** Do not upload only `index.html` if you want PWA installation support. Keep the following files and folders together:
>
> - `index.html`
> - `manifest.webmanifest`
> - `sw.js`
> - `assets/`

## Project Structure

```text
site/
├── index.html
├── manifest.webmanifest
├── sw.js
├── README.md
└── assets/
    ├── icon-192.svg
    ├── icon-512.svg
    └── Nikhil_Thakur_Resume.pdf