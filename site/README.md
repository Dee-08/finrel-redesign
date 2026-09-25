# Finrel website redesign

A complete, responsive, nine-page corporate website with a custom 404 page. The design preserves Finrel’s original logo, green/orange identity, authentic photography and business details. It translates the supplied Cénée screenshot into a split photographic hero, editorial type, open grids, full-width photographic sections, compact navigation and restrained interaction styling.

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

`/`, `/about/`, `/services/`, `/veterinary/`, `/branches/`, `/contact/`, `/appointments/`, `/privacy/`, `/shop/`.

The online store domain failed DNS resolution on 25 September 2026. `company.shopAvailable` is therefore false: shopping CTAs lead to `/shop/`, which offers customer-care and branch alternatives while retaining the original external store link. Once the store is verified working again, set `shopAvailable: true` and rebuild to restore direct store links. There is no replacement checkout, catalogue or pricing.

## Forms and integrations

Contact and appointment forms submit by normal HTTPS POST to `https://finrelpharmacy.com/?page_id=954` using the original form field names and form identifier. The response opens in a separate tab, keeping the redesigned site available. The local status explains the handoff without claiming success. No success message is fabricated locally. Frontend validation and the outgoing field mapping were verified using a local-only POST receiver; actual delivery has NOT been tested by sending a live enquiry.

Before replacing the original WordPress website, retain its functioning submission endpoint or connect a verified replacement. Removing that endpoint would break form delivery. Confirm the existing form’s recipient, spam handling and acceptance of the corrected department values. Branch availability must be confirmed by Finrel; this is an appointment request, not a scheduling system.

Directions use Google Maps search URLs based on the published branch addresses. They are not claims of verified map coordinates. The original Facebook and Instagram links are preserved. Their account ownership/status was not independently checked.

## Production handover

The presentation site is hosted at https://finrel-web.vercel.app/ from `Dee-08/finrel-redesign`. The root `vercel.json` builds `site/` and publishes `site/dist`. The original finrelpharmacy.com website remains unchanged. See the repository root README for VS Code Live Server setup.

Set `SITE_ORIGIN` to the verified production origin before building to generate canonical URLs, Open Graph URLs and `sitemap.xml`. Without a configured origin, the preview does not pretend to be the production website.

Preserve redirects from the existing WordPress URLs when replacing the site:

| Old URL | New page |
| --- | --- |
| `/?page_id=1195` | `/about/` |
| `/?page_id=952` | `/services/` |
| `/?page_id=954` | `/contact/` (GET requests only; retain POST processing) |

These redirects must be configured on the chosen host. They are intentionally not applied by the development server.

See `CONTENT-AND-DESIGN-AUDIT.md` for source decisions and information needing confirmation, and `QA.md` for checks and limitations.
