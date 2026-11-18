# Raju Studio Production — portfolio site

Next.js 16 (App Router, TypeScript) portfolio for Raju Studio Production, Almora, Uttarakhand.

## Commands

```bash
npm install
npm run media     # derive film posters + Open Graph images from /public/media (needs ffmpeg)
npm run build     # production build (set NEXT_PUBLIC_SITE_URL first, see .env.example)
npm start         # serve the production build
```

## Content

- `src/content/about-us.txt` — the studio's supplied copy (source of truth for text).
- `src/content/site.ts` — studio facts, contact methods, services, adapted from it.
- `public/media/` — the supplied photos, films, portrait and logo, stored once under short names
  (`photos/<story>/`, `films/`, `brand/`). Derived files: `posters/` and `/og/`.
- `src/content/media.ts` — typed media manifest: every photo, film and poster with dimensions,
  alt text, focal point, gallery sequence and its originally supplied filename.
- `scripts/prepare-media.mjs` — extracts poster frames and renders Open Graph images from
  `public/media`. Re-run with `--force` to regenerate.

## Notes

- All supplied stills are portrait (4:5), so stories alternate single feature frames with side-by-side
  pairs. The gallery renderer also supports a `wide` row for future landscape work.
- The pre-wedding film and the “Better Together” teaser are wide footage letterboxed inside 9:16
  files; they are shown at their picture ratio with the black bars cropped.
- The logo PNG is used as supplied; its transparent margin is cropped in CSS (`src/components/Logo.tsx`).
- “The Loudest Side of the Wedding” is intentionally shot sideways and is shown as encoded.
- Names lettered inside some photographs are not used in titles or alt text, since they are unverified.
