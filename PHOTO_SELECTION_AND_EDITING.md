# Version 3.4 photo selection and editing

This update preserves the Version 3.3 website and refines four photo placements.

| Page | Photo file | Original photo | Placement |
|---|---|---|---|
| Home | `assets/photos/eric-portrait.webp` | `Image (6).jpg` | Unchanged hallway portrait in homepage hero |
| Research | `assets/photos/eric-chemistry-poster-2022.webp` | `IMG-20221014-WA0006.jpg` | Conference poster on definitions of romantic chemistry, beside the study description |
| Methods & Skills | `assets/photos/eric-poster-discussion-unblurred.webp` | `Image-4.jpg` | User-supplied unblurred version of the poster discussion |
| Teaching | `assets/photos/eric-presentation.webp` | `90820fdc-5a8d-4ef8-9135-6bdcb92cefa0.jpg` | Compact banner above Instructor of Record |
| About | `assets/photos/eric-sunset.webp` | `a012b2d4-1f4f-4c2f-a1d2-5982d2d731c3.jpg` | Sunset portrait beside “Hello, I’m Eric.” |
| About | `assets/photos/share-lab-group.webp` | `C1B553A1-AC97-44A2-9C7B-C99AB1C1FBC6.JPG` | Existing lab group photo lower on About |

All photos are user-supplied and optimized to WebP without altering the people depicted. We used the unblurred picture as supplied. If a third party's face is visible, confirm that they are comfortable with publication.

## How to edit photo placement

Photo `src` and `alt` attributes are editable in each relevant HTML page. The visual framing, image crop, and responsive heights live in `assets/v3-4.css`, which overrides some older Version 3.3 photo styles. You can update crop using `object-position` or height using the CSS for the corresponding page.

To replace the images, put an optimized WebP in `assets/photos/` and keep the filename, or change the filename in the corresponding HTML. Update the alt text if the content changes.
