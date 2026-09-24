# Finrel website redesign

A complete, responsive, eight-page corporate website with a custom 404 page. The design preserves Finrel’s original logo, green/orange identity, authentic photography and business details. It translates the supplied Cénée screenshot into a split photographic hero, editorial type, open grids, full-width photographic sections, compact navigation and restrained interaction styling.

## Run locally

No package installation is required. With Node.js 20 or newer:

```sh
npm run build
npm run check
npm run dev
```

Open http://127.0.0.1:4173/. On this Windows workspace, `Start-Finrel.ps1` also locates the bundled Node runtime when Node is not on PATH. The local server intentionally listens only on the loopback interface.

## Edit content

- `content.mjs`: company contacts, navigation, branches, services, leadership, FAQs, statistics and unpublished claims awaiting review.
- `pages.mjs`: page-specific editorial sections, contact form and appointment request flow.
- `components.mjs`: shared header, footer, image renderer, buttons, branch rows and page metadata.
- `build.mjs`: generates complete HTML pages into `dist/`.
- `dist/style.css`: shared design tokens, layouts, responsive rules and reduced-motion behavior.
- `dist/app.js`: mobile navigation, branch filtering and appointment steps. No framework or runtime dependencies.
- `image-manifest.json`: image dimensions and responsive source variants.
- `optimize-images.py`: rebuilds WebP assets from original photos; needs Python and Pillow only when images change.

The `dist` directory contains the ready-to-serve site. HTML is rendered at build time, so navigation and content work without JavaScript. The appointment wizard requires JavaScript and includes a link to the existing form for visitors without it. Branches remain fully listed without JavaScript.

## Pages

`/`, `/about/`, `/services/`, `/veterinary/`, `/branches/`, `/contact/`, `/appointments/`, `/privacy/`.

Online store links go directly to `https://finrelonline.com/`. There is no replacement checkout, invented catalogue or invented pricing.

## Forms and integrations

Contact and appointment forms submit by normal HTTPS POST to `https://finrelpharmacy.com/?page_id=954` using the original form field names and form identifier. The browser transfers to the existing website for processing. No success message is fabricated locally. Frontend validation and the outgoing field mapping were verified; actual delivery has NOT been tested by sending a live enquiry.

Before replacing the original WordPress website, retain its functioning submission endpoint or connect a verified replacement. Removing that endpoint would break form delivery. Confirm the existing form’s recipient, spam handling and acceptance of the corrected department values. Branch availability must be confirmed by Finrel; this is an appointment request, not a scheduling system.

Directions use Google Maps search URLs based on the published branch addresses. They are not claims of verified map coordinates. The original Facebook and Instagram links are preserved. Their account ownership/status was not independently checked.

## Production handover

The current deliverable is local and has not replaced the live Finrel website. Serve `dist/` on an HTTPS static host that supports directory index pages and the custom `404.html`. The Sites publishing skill became unavailable in the installed plugin directories during this session; no hosted deployment was attempted.

Set `SITE_ORIGIN` to the verified production origin before building to generate canonical URLs, Open Graph URLs and `sitemap.xml`. Without a configured origin, the preview does not pretend to be the production website.

Preserve redirects from the existing WordPress URLs when replacing the site:

| Old URL | New page |
| --- | --- |
| `/?page_id=1195` | `/about/` |
| `/?page_id=952` | `/services/` |
| `/?page_id=954` | `/contact/` (GET requests only; retain POST processing) |

These redirects must be configured on the chosen host. They are intentionally not applied by the development server.

See `CONTENT-AND-DESIGN-AUDIT.md` for source decisions and information needing confirmation, and `QA.md` for checks and limitations.
