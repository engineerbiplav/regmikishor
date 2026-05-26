# Kishor Regmi ACCA — Personal Website

A professional portfolio and contact site for Kishor Regmi, ACCA Financial Expert.

---

## Project Structure

```
kishor-regmi/
├── index.html          ← Main HTML (SEO optimised, semantic, accessible)
├── css/
│   └── style.css       ← All styles (mobile-first, responsive)
├── js/
│   └── main.js         ← Animations, cursor, scroll logic
├── assets/
│   ├── favicon.svg     ← SVG favicon (navy + gold KR monogram)
│   ├── og-image.jpg    ← (ADD THIS) 1200×630 image for social sharing
│   ├── kishor-regmi.jpg         ← (ADD THIS) Hero portrait photo
│   └── kishor-regmi-about.jpg   ← (ADD THIS) About section photo (can be same)
└── README.md
```

---

## Adding Your Photo

### Hero Section
Open `index.html` and find the comment inside `<!-- Hero Photo -->`.
Replace the `<svg>` placeholder with:

```html
<img src="assets/kishor-regmi.jpg"
     alt="Kishor Regmi – ACCA Financial Expert, Kathmandu"
     width="400" height="533"
     fetchpriority="high" />
```

**Photo tips:**
- Portrait orientation (3:4 ratio is ideal, e.g. 400×533px)
- Professional headshot or half-body shot
- Plain or blurred background works best

### About Section
Similarly, find the placeholder inside `#about .about-img-wrap` and replace with:

```html
<img src="assets/kishor-regmi-about.jpg"
     alt="Kishor Regmi ACCA – Financial Expert Kathmandu"
     width="480" height="600" />
```

---

## SEO Checklist

- [x] Meta title & description
- [x] Open Graph tags (Facebook/LinkedIn sharing)
- [x] Twitter Card tags
- [x] Canonical URL (`https://regmikishor.com.np/`)
- [x] JSON-LD Person schema
- [x] JSON-LD ProfessionalService schema
- [x] Semantic HTML (`<article>`, `<section>`, `<address>`, `<nav>`, `h1–h3`)
- [x] ARIA labels on interactive elements
- [x] Alt text instructions for images
- [ ] Add `og-image.jpg` to `assets/` (1200×630px recommended)
- [ ] Update canonical URL if domain changes

---

## Mobile Hero

The hero section now:
- Stacks to a **single column** on mobile (text first, photo below)
- Shows the **photo on mobile** (previously hidden)
- Uses `min-height: 100svh` (accounts for mobile browser chrome)
- Centers all hero text on small screens
- Makes the CTA button full-width on mobile
- Scales smoothly across 480px, 768px, and 1024px breakpoints

---

## Deployment

1. Upload the entire `kishor-regmi/` folder to your web host under the root directory.
2. Ensure `index.html` is at the root level.
3. Add your photos to `assets/` and update the HTML as described above.
4. Create and add `assets/og-image.jpg` for social sharing previews.

---

© 2024 Kishor Regmi ACCA
