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

## Conventions from the build spec

- The conference paper page is sourced from the **Fable-revised** NCA paper (file 07 in the source package), not the original draft.
- The Evidence Base, Social Media Strategy, editorial critique, and build spec files from the source package are **not** in this repository and must not be added to it.
- If a Literature Review URL dies, do not remove the entry — append `(URL no longer resolves)` after the citation and keep it.
