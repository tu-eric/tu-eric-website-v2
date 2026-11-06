# Editing guide for your website

You can update this site using only **Visual Studio Code**. Save the file and refresh your browser to see the result. CSS controls the look, HTML controls the words and images, and `assets/site-v3-2.js` controls the mobile menu and publication filters.

## Update text
Each page has its own file:

| Page | File |
|---|---|
| Homepage | `index.html` |
| Research | `research.html` |
| Methods & Skills | `methods.html` |
| Publications | `publications.html` |
| Teaching | `teaching.html` |
| About | `about.html` |
| Contact | `contact.html` |

In VS Code, select **File → Open Folder**, choose this website folder, open the relevant `.html` file, and press `Ctrl+F` to find the paragraph or heading. Change the words **between** the tags, not the tags themselves. `<em>` is the coloured italic accent in headings. `&amp;` means `&` in HTML. Press `Ctrl+S`.

## Change navigation order
The `<nav id="primary-nav">` block is repeated in each of the seven HTML files. Search for `id="primary-nav"` and move the entire `<a href="...">Label</a>` element up or down **in every page**. On each page, preserve `aria-current="page"` on the link to that current page. The website footer has a separate Explore section with its own links.

## Replace the public CV
The current linked file is `cv/Eric_Tu_CV_Fall_2026.pdf`. You may replace the PDF using the **exact same filename**, which preserves all existing links. Alternatively, add `cv/Eric_Tu_CV.pdf` and in VS Code press `Ctrl+Shift+F` to replace every occurrence of the old path with the new one. A stable filename makes subsequent updates easier. Check whether you want your personal phone number publicly available.

## Add or change an image
The current illustrations live in `assets/`. To replace an existing image without changing the page code, use the same filename and image type. To use a new image, put it in `assets/` and edit its HTML `<img src="assets/filename.jpg" alt="Description">` path. Use a descriptive alt description. If replacing a transparent SVG with a photograph, you may need to adjust object-fit, height, and cropping in `assets/v3.css`. Keep images compressed to help load times.

## Edit publications or open-science links
Open `publications.html` and find the paper title using `Ctrl+F`. Each publication is contained in `<article class="publication-item" data-category="..."> ... </article>`.

- Edit the title, authors, journal, and year in that block.
- Use `data-category="relationships"`, `"methods"`, `"mental-health"`, or `"preprint"` to assign its filter.
- The `.pub-actions` block includes links such as `Journal article`, `Data & analysis code`, and `Study 1 preregistration`.
- To add an OSF link, copy an existing `<a class="resource-link" ...>...</a>` and replace its URL and visible label.
- For supporting research resources, add a `data-resource-type` attribute **to that link**, with one of these values: `preregistration`, `data`, `code`, `data-code`, `materials`, or `measure`. For example:

  ```html
  <a class="resource-link" data-resource-type="preregistration"
     href="https://osf.io/ACTUAL_ID/" target="_blank"
     rel="noopener noreferrer">Preregistration</a>
  ```

- Entries with at least one qualifying resource link appear under **Open research resources** automatically. You do **not** need to modify the publication's `<article>` attributes.
- A journal link, open manuscript or preprint **alone** does not qualify. Related tutorials may remain as regular links, but do not count unless they directly provide study materials or code tied to that publication.
- Do not add placeholder links or claim data are open unless you have checked permissions, project contents, and the public link.

## Change colours or fonts
Make your new CSS overrides at the end of `assets/v3.css`. The original design is in `assets/styles.css`, followed by `assets/v2.css`; `v3.css` loads last and takes precedence when selectors are equally specific.

## Preview and publish
**Preview:** Double-click `index.html`, or use VS Code Live Server. The site needs no build process. Some external links require an internet connection.

**Publish after connecting to Netlify:** Save changes; use VS Code Source Control to commit and push to the connected GitHub repo. Netlify automatically deploys changes pushed to the configured production branch. For major edits, use a feature branch and a Netlify Deploy Preview before merging.

## Before each website update
Check new publications' final citation details and statuses, test each new DOI/OSF link, preview on mobile, confirm the CV is current, and verify sensitive data are not being uploaded publicly.

## Publication filtering (Version 3.2)
- `assets/site-v3-2.js` handles search and filters. All HTML pages load this versioned script; do not mix it with scripts from Versions 1–3.1.
- **Open research resources** includes publications with links tagged `data-resource-type="preregistration"`, `"data"`, `"code"`, `"data-code"`, `"materials"`, or `"measure"`.
- Open journal articles, preprints, open manuscripts and broadly related tutorials do not qualify by themselves. They can still be linked for convenient access.
- **Five entries** in the current publication list qualify: the 2026 charisma paper, RoCh Scale preprint, lay definitions of chemistry paper, worldwide ideal-partner-preferences paper, and 2021 charisma/sexuality paper.
- Filters clear a prior search term when switched. Typing in the search field then narrows the selected filter.
- Use only resource URLs that the author(s) intend to make publicly available.


### New in Version 3.3: photos
The selected pictures are in `assets/photos/`. You can replace a `.webp` picture with another of the same filename, or change the `src` and `alt` attributes in the relevant HTML page. Layout/cropping settings are in `assets/v3-3.css`. See `PHOTO_SELECTION_AND_EDITING.md`.

### Version 3.4 photo positioning
For the Research, Methods, Teaching, and About photo layout and crop, edit `assets/v3-4.css`. Source files are in `assets/photos/`; refer to `PHOTO_SELECTION_AND_EDITING.md`.

## Version 3.5: Selected Talks and Selected Posters
Edit the `#selected-talks` and `#selected-posters` sections near the bottom of `research.html`. Each entry is a single `<article>` element. Change its year, conference and title, or copy an entry to add a new one. The visual styles are in `assets/v3-5.css`.

The talks section lists the talk information only; slide decks are intentionally not hosted. Poster cards also appear without a download link until you provide the corresponding poster PDF. To link one, add the PDF to the `posters/` folder and follow `posters/README.md`. Avoid uploading poster PDFs with figures that you don't have permission to redistribute or unpublished results you no longer wish to share.

If a poster summarizes a published paper, you can separately add a `Related poster` link beneath its citation in `publications.html`; this should not count as an `Open research resources` link.

## Version 3.6: Selected posters and PDF thumbnails

All six selected posters have downloadable PDFs in `posters/`, and preview images in `assets/posters/`. Edit the titles and conference details in the **Selected posters** section of `research.html`. Change a PDF or thumbnail filename in the corresponding card if you replace the file.

The poster cards use `assets/v3-6.css`, which controls the small thumbnails on desktop and mobile. Keep the poster thumbnail `<a>` and the text `View poster (PDF)` link pointing to the same PDF.

The two **Related poster** links in `publications.html` go to the RoCh Scale (2024) and school cellphone policies (2025) posters. Poster links do not affect the Open research resources filter.
