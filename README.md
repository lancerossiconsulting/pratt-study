# Pratt Study — site source

Reference site for the Pratt Study research package: supporter-generated AI political media and the 2026 Los Angeles mayoral race.

**Live site:** https://lancerossiconsulting.github.io/pratt-study/

## How this site works

GitHub Pages builds the site automatically with Jekyll (classic branch deploy from `main`, root folder). Push a change to `main` and the site rebuilds in one to two minutes. There is no local build requirement.

## Which file maps to which page

| File | Page |
|------|------|
| `index.md` | Home (`/`) |
| `journal-article.md` | `/journal-article/` |
| `conference-paper.md` | `/conference-paper/` |
| `substack.md` | `/substack/` |
| `practice-brief.md` | `/practice-brief/` |
| `literature-review.md` | `/literature-review/` |
| `podcast-outline.md` | `/podcast-outline/` |
| `downloads.md` | `/downloads/` |
| `about.md` | `/about/` |
| `404.md` | 404 page |

Layouts live in `_layouts/` (every content page uses `article`), shared chrome in `_includes/`, and all styling in `_sass/main.scss`. Each page's header (kicker, metadata line, title, dek) is driven by its front matter: `kicker`, `meta`, `title`, `subtitle`. Set `dropcap: false` in front matter to suppress the opening drop cap.

## To update content

1. Edit the relevant `.md` file (the body below the front matter is standard Markdown; kramdown converts `---` to em-dashes and straightens smart quotes automatically).
2. Update the `meta:` line's "Last updated" date in the front matter.
3. Commit and push to `main`. GitHub Pages redeploys automatically.

To regenerate the Word/PDF copies in `/downloads/` after a content change, re-export from the page markdown (pandoc for `.docx`, Word for `.pdf`) and replace the files in `downloads/`, keeping the same kebab-case filenames.

## Design notes

- Fonts are self-hosted (Source Serif 4 and Source Sans 3, variable WOFF2, latin subset) in `assets/fonts/` — no third-party font requests.
- The only JavaScript (`assets/js/site.js`) tags external links with `target="_blank"` + a `›` marker, and adds the progressive filter on the Literature Review page. The site is fully usable with JavaScript disabled.
- No analytics, no trackers, no cookies.

## Digital production conventions

This site follows the **Digital Production** standard for Lance Rossi's web-published work:

1. **Superscript citations.** Every reference to an outside source in body prose carries a superscript italic numeral hyperlinked *directly to the cited resource* (not to a footnote list). Numbering is sequential per page in reading order; a source cited at more than one evidentiary point gets a fresh numeral each time. Scholarly works are cited at their first substantive mention per page; press sources at every load-bearing claim or quote.
   - Markup: `<a class="cite" href="URL"><sup><em>N</em></sup></a>`, placed immediately after the source mention or closing parenthesis.
   - `assets/js/site.js` deliberately skips the external-link `›` marker on `.cite` links (they still open in a new tab).
   - Only link URLs verified to resolve; dead URLs follow the `(URL no longer resolves)` convention below.
   - Production documents (the podcast outline) are exempt — markers inside a spoken script would corrupt it.
2. **QR bridge.** The site ships a QR code linking phones to it: web SVG at `assets/qr-pratt-study.svg` (shown on the About page), print PNG at `downloads/pratt-study-qr.png` for conference and print materials.
3. **Corpus scope.** Currently applied to the long-form writing; future iterations may expand the corpus to social media content and other materials, which inherit the same citation standard when added.

## Conventions from the build spec

- The conference paper page is sourced from the **Fable-revised** NCA paper (file 07 in the source package), not the original draft.
- The Evidence Base, Social Media Strategy, editorial critique, and build spec files from the source package are **not** in this repository and must not be added to it.
- If a Literature Review URL dies, do not remove the entry — append `(URL no longer resolves)` after the citation and keep it.
