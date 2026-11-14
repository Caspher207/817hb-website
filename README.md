# ACT-IN-FAITH · 817 H&B — Website

Five-page static marketing website for **8IF Pte Ltd** (UEN: 201911538H), trading publicly as
**ACT-IN-FAITH**, also known as **817 H&B (Health & Beauty)**.

## Stack

- React 18 + React Router 6
- Vite 6
- Tailwind CSS 4 (via `@tailwindcss/vite`)

## Pages

| Route       | Page                    |
| ----------- | ----------------------- |
| `/`         | Home                    |
| `/about`    | About Us                |
| `/services` | Wellness Services       |
| `/events`   | Events & Workshops      |
| `/contact`  | Consultations & Contact |
| `*`         | 404 — Not Found         |

## Development

```bash
cd website
npm install
npm run dev        # local dev server (default http://localhost:5173)
```

`npm run dev` automatically copies the client before/after photos into
`public/images` for local preview (`predev` script).

## Production build

```bash
npm run build      # outputs to website/dist
npm run preview    # serve the production build locally
```

The testimonials gallery is enabled in production via
`VITE_SHOW_RESULTS=true` in `.env.production` (committed). To hide the
section without removing the photos, remove that flag and rebuild.

The build is a static SPA. Any static host (Netlify, Vercel, Cloudflare Pages,
GitHub Pages, or an S3/CDN) can serve `dist/`. Because the site uses
`BrowserRouter`, configure the host to **serve `index.html` for unknown paths**
(SPA fallback / rewrite rule).

## Content editing

Most site copy and data lives in:

- `src/data/site.js` — brand details, contact info, workshop schedule, services, gallery
- `src/pages/*.jsx` — page sections and copy

To update the workshop schedule or venues, edit `WORKSHOPS` and `VENUES` in
`src/data/site.js`.

## Enquiry form behaviour

The contact form does **not** post to a server. On submit it validates the
fields, then opens WhatsApp (`wa.me/6598587188`) with the enquiry pre-filled —
the visitor presses send inside WhatsApp. A "Send via Email instead" option
opens the visitor's mail app addressed to `8if.info@gmail.com`. An off-screen
honeypot field provides basic spam mitigation.

If a hosted form endpoint (e.g. Formspree, Netlify Forms) is approved later,
wire the `onSubmit` handler in `src/pages/Contact.jsx` to that endpoint.

## Images

### Client-supplied

- `logo.png` — extracted from the client Home document, background made
  transparent, tight-cropped.
- `diamond-peel-program.webp`, `diamond-peel-sachet.webp`,
  `health-begins-cells.webp` — embedded assets from the client Home document.
- `public/images/results-facial-*.webp` — the eight supplied before/after
  photographs (`Before&After*` files, in order; slot 8 uses `Before&After8.png`),
  cropped to remove Chinese promotional text overlays and presentation-slide
  surrounds, square-padded on a blurred self-backdrop so both panels fit the
  cards, converted to WebP. Skin appearance, lighting and before/after order
  are unchanged. **Originals are preserved untouched in the project root.**
  These show identifiable individuals and are published in production under
  `VITE_SHOW_RESULTS=true` (`.env.production`).

### Licensed stock (Unsplash License — free for commercial use, no attribution required)

| File                            | Photographer      | Source                                                        |
| ------------------------------- | ----------------- | ------------------------------------------------------------- |
| `hero-facial-treatment.webp`    | kimia kazemi      | unsplash.com/photos/RbIcMsh0NSk                               |
| `workshop-facial.webp`          | kimia kazemi      | unsplash.com/photos/J6Hg_YH2tFk                               |
| `skin-portrait.webp`            | Fleur Kaan        | unsplash.com/photos/w4Dj3MshHQ0                               |
| `skincare-routine-mirror.webp`  | Christian Agbede  | unsplash.com/photos/Vpcy3ytvQVw                               |
| `serum-dropper.webp`            | Enecta            | unsplash.com/photos/80wCkpt-IKE                               |
| `cream-texture.webp`            | Kelsey Curtis     | unsplash.com/photos/kD9qprR6HBI                               |

## Accessibility notes

Body copy targets 18–20px with ~1.65 line-height. Text colours are calibrated
against WCAG AA: `mocha` (#4f4134) ≈ 7:1 on `cream`; `gold-deep` (#74572b)
≈ 5.9:1 on `cream` and supports white text on gold buttons; `cream` text on
`pine`/`espresso` exceeds 8:1. Form fields use 2px borders, 16px+ text and
error messages in `red-800`.

## Before launch — open items

- [ ] Confirm production domain and update `public/sitemap.xml` and
      `public/robots.txt` (currently provisional `https://www.817hb.sg`).
- [ ] Confirm whether the "not available Sat, Sun & PH" restriction in the
      Home document should be published (currently omitted; site says only
      "strictly by appointment").
- [ ] Confirm whether the 50% new-customer trial facial discount is a current,
      publishable offer (site currently says "introductory pricing … may be
      available — please enquire").
- [ ] Confirm the final programme/service structure (the client form's third
      service branch was left blank; the site presents the Reset programmes
      and confirmed offerings without asserting a three-branch structure).
- [ ] Choose a form backend if a non-WhatsApp/email enquiry route is wanted.
- [ ] Privacy policy / terms: none supplied; none fabricated. Provide client
      legal text if required before launch.
