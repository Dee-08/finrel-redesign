# Verification record

Initial checks: 24 September 2026. Presentation review: 25 September 2026.

## Automated checks

- Build succeeds with no package installation and no runtime dependencies.
- JavaScript syntax check passes.
- `npm run check`: 10 HTML documents (9 pages and custom 404), 308 local links/assets, and 44 image instances pass.
- Unique element IDs, one H1 per page, descriptions, image alt text/dimensions, branch phone formats and preserved form submission destinations checked.
- Responsive WebP variants generated from original Finrel photography. Non-hero images are lazy-loaded. Font is hosted locally, with its OFL license included.
- No new dependencies added for the presentation refinements.

## Browser checks

All nine pages checked for horizontal overflow, H1 count, broken loaded images and external-link attributes at 320px, 390px, 768px, 1024px, 1440px and 1920px widths: 54 page/viewport checks passed. A branch-heading overflow at 320px was corrected and rechecked. The homepage and mobile menu were also inspected at 390px.

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

No live messages, bookings, orders or customer data were sent during testing. Form POST field mapping is preserved from the original Finrel site, but successful receipt by Finrel remains unverified. The existing online store failed DNS resolution and was also inaccessible through the research tool on 25 September. Shopping CTAs now offer a local fallback with call/branch options and a preserved external store link. Instagram and Facebook URLs returned HTTP 200 with the expected Finrel profile titles. Directions are address searches, not verified coordinates. Business confirmation items are recorded in the content audit.

The original live website has not been modified or replaced. The presentation version is deployed separately to finrel-web.vercel.app.

## Presentation refinement checks — 25 September

- Retained the established editorial layouts, original logo, colour palette and photography.
- Moved optional phone help after the appointment form on mobile; retained the side-by-side desktop layout.
- Refined form spacing, footer tap targets and mobile search input sizing; added completed-step styling and explicit edit actions in the booking review.
- Improved mobile veterinary heading wrapping and responsive image selection for tall crops.
- Keyboard Escape closes the mobile menu; leaving the header by keyboard also closes it. FAQ disclosure opens normally.
- Search with whitespace and mixed case found Apata; conflicting area filter showed the empty state; clear restored all eight branches.
- Booking: preselected Apata; past date blocked; future date/time retained through Edit branch; changed to Olomi; malformed email blocked with native validation.
- Local-only POST receipt verified name, email, department, branch in subject/message, preferred date/time, form identifier and empty honeypot. No requests were sent to the live Finrel endpoint.
- Contact: Veterinary topic preselection and all outgoing contact fields verified using the same local-only receiver.
- Forms open their result in a new tab, with an honest handoff notice on the original tab. They do not claim booking confirmation or successful email delivery.

Before activating real customer submissions, Finrel should confirm the WordPress recipient, mail delivery, anti-spam handling and acceptance of the corrected department values. The original form still lists unrelated template departments (Dentistry, Neurology, Diagnostic Imaging, Pediatrics); we have not invented matching medical services. This dependency cannot be verified from frontend code alone.
