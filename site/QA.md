# Verification record

Completed 24 September 2026.

## Automated checks

- Build succeeds with no package installation and no runtime dependencies.
- JavaScript syntax check passes.
- `npm run check`: 9 HTML documents (8 pages and custom 404), 261 local links/assets, and 41 image instances pass.
- Unique element IDs, one H1 per page, descriptions, image alt text/dimensions, branch phone formats and preserved form submission destinations checked.
- Responsive WebP variants generated from original Finrel photography. Non-hero images are lazy-loaded. Font is hosted locally, with its OFL license included.
- Page JavaScript is approximately 5 KB; shared CSS is approximately 37 KB, before compression.

## Browser checks

All eight pages checked for horizontal overflow at 320px, 768px, 1440px and 1920px viewport widths. A branch-heading overflow at 320px was corrected and rechecked. The homepage and mobile menu were also inspected at 390px.

- Desktop and mobile hero, page headings, original logo, image crops, service presentation, About page, footer and form layouts inspected visually.
- One service-gallery and one story section in the home DOM verified. The browser's full-page screenshot stitching produced visual duplication; individual viewport screenshots and DOM checks confirmed this was a capture artifact, not repeated site content.
- No broken loaded images in the desktop page checks.
- No browser error or warning logs in the final check.
- Branch text search: “Akobo” yields one result.
- Empty search state appears for a non-matching query.
- Olorunsogo area filter yields two branches.
- Reset restores all eight branches; empty-state clear also works.
- Branch appointment links preselect the relevant branch and show its matching address/phone.
- Required date validation prevents progression; preferred date and time persist across backward navigation.
- Request review displays branch, appointment type, date and optional time.
- Enter key progresses from the visit step. Missing name/email on the final step keeps the user on the local site and focuses the invalid field.
- Mobile menu expands and closes; Escape dismisses it.
- Veterinary contact link selects the Veterinary enquiry category.
- Empty contact submission is blocked by native required-field validation.
- FAQ disclosure opens and exposes the expected answer.

## Accessibility details

Semantic header/nav/main/footer, skip link, visible focus outlines, one H1 per page, labelled form controls, autocomplete attributes, live result counts, real buttons and links, accessible mobile-menu state, reduced-motion support, and non-colour-only status cues are implemented.

Calculated contrast ratios for solid-colour UI combinations:

| Combination | Ratio |
| --- | --- |
| Main text on white | 15.02:1 |
| Secondary text on white | 5.24:1 |
| Shop button text on original orange | 4.60:1 |
| Utility-bar text on original green | 5.84:1 |
| White button text on dark green | 11.97:1 |
| Secondary text on pale surface | 4.77:1 |

Photography-backed text also uses dark overlays and was visually reviewed. No formal third-party accessibility or performance score is claimed.

## Integration limits

No live messages, bookings, orders or customer data were sent during testing. Form POST field mapping is preserved from the original Finrel site, but successful receipt by Finrel remains unverified. The existing online store was not reachable via the research tool; its destination is preserved. Directions are address searches, not verified coordinates. Business confirmation items are recorded in the content audit.

The original live website has not been modified or replaced. This is a complete local implementation and deployable static output.
