# SCALE X — GitHub Pages Website

## Files
- `index.html` — home, services, pricing, process, FAQ, contact
- `about.html` — founder story
- `blogs.html` — blog listing
- `blog-*.html` — individual articles
- `reviews.html` — reviews layout with clearly marked placeholders
- `styles.css` — shared responsive design
- `script.js` — shared mobile hamburger menu
- `founder.png` — founder portrait
- `assets/favicon.svg` — favicon

## Publish
Upload the files and folders inside this directory to the root of the GitHub Pages repository. Do not upload the ZIP itself or nest the files in another folder.

Mobile navigation uses a hamburger menu at 700px and below. Customer review placeholders are not real testimonials and must be replaced with verified feedback before publication.


## Automatic blog publishing (GitHub Pages / Jekyll)
- `_config.yml` enables clean individual blog URLs.
- `_posts/` contains individual Markdown articles.
- `_layouts/post.html` is the shared article design.
- `blogs.html` automatically lists every post.
- `BLOG_TEMPLATE.md` explains how to add the next article.

After this one-time setup, add a blog by creating one dated `.md` file inside `_posts/`. To edit a blog, edit only its own file. The listing updates automatically after GitHub Pages rebuilds.
