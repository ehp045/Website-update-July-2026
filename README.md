# Your Name — website

A plain HTML/CSS/JS website. No build tools, no installs — open any
`.html` file in a browser and it works. This file explains how to
edit it.

## File map

```
website/
├── index.html         Homepage
├── about.html          About page
├── writing.html        Portfolio page
├── blog.html            Blog listing page
├── contact.html         Contact page
├── blog/
│   ├── post-1.html       An example blog post
│   └── post-2.html       Another example blog post
├── css/
│   └── style.css        All the site's styling, in one file
└── js/
    └── main.js           Mobile menu toggle (optional — the site works without it)
```

## The most common edits

**Replace "Your Name" with your actual name**
"Your Name" appears as a placeholder in the logo (top left of every
page), in each page's browser-tab title, and in the footer. Use
your editor's find-and-replace across all files, or edit each by
hand — it's the same text everywhere.

**Change any other text**
Open the relevant `.html` file in any text editor and edit the words
between the tags. Look for `<!-- EDIT: -->` comments — they mark the
sections you're most likely to want to change. You can't break
anything by editing text between `>` and `<`.

**Add a piece to "Featured Work" on the homepage**
The grid is a fixed 3×3 (9 cards) on desktop, and every card is a
square — anything that doesn't fit gets clipped at the bottom, so
keep article descriptions short. Open `index.html` and find the
`work-grid` section. Copy one of the two card patterns:
- An article card: `<a class="work-card">` containing an "Article"
  label, a title, and a one-line description.
- An illustration card: `<button class="work-card work-card--illustration">`
  containing a single `<img>`, e.g.
  `<img src="images/piece-1.jpg" alt="Description of the piece">`.
  Clicking it opens the image enlarged, with a caption underneath
  pulled from the button's `data-caption="..."` attribute — set
  that to whatever caption you want to show.

**Add a new blog post**
1. Duplicate `blog/post-1.html`, rename the copy (e.g. `post-3.html`).
2. Open it and change the title (appears twice — in `<title>` and in
   the `<h1>`), the date, and the body paragraphs.
3. Open `blog.html` and copy one `<li class="post-item">` block near
   the top of the list, then edit its title, date, excerpt, and the
   `href` links to point at your new file. Put newest posts first.

**Add a new writing sample**
Open `writing.html`, copy one `<li class="writing-item">` block, and
edit the title, year, description, and link.

**Change colors or fonts**
Open `css/style.css` and look at the very top, under
`/* 1. DESIGN TOKENS */`. Every color and font on the whole site is
set from that one list — change a value there and it updates
everywhere. `--color-blue` is the main accent (logo, nav, links, the
squiggle line); `--color-tomato` is the one warm accent, used for the
"Featured Work" background.

**Replace the photo placeholder**
The "YN" block on the About page is a placeholder. To use a real
photo, put an image file in a new `images/` folder, then find
`class="about-photo"` in `about.html` and replace the `<div>` with:
```html
<img src="images/portrait.jpg" alt="Portrait of Your Name"
     style="width:8.5rem;height:8.5rem;border-radius:6px;object-fit:cover;">
```

**Make the contact form actually send email without opening the
visitor's email app**
The form currently uses `mailto:`, which opens the visitor's own
email application — reliable with zero setup, but not the smoothest
experience. For a proper in-page submission:
1. Go to [formspree.io](https://formspree.io) and create a free
   account — no code required.
2. They'll give you a form endpoint URL.
3. In `contact.html`, find the `<form>` tag and replace
   `action="mailto:hello@example.com" method="post" enctype="text/plain"`
   with `action="https://formspree.io/f/YOUR_ID" method="POST"`.

## Putting it online

This site has no server-side code, so any static hosting works.
Two easy, free options:

- **Netlify Drop**: go to [app.netlify.com/drop](https://app.netlify.com/drop)
  and drag the whole `website` folder in. You'll get a live URL in
  seconds, and can connect a custom domain from there.
- **GitHub Pages**: create a GitHub repository, upload these files,
  then turn on Pages in the repository's Settings tab.

## A note on the design

The palette is deliberately small: an off-white background, deep
royal blue for the logo, navigation, and plain links, and tomato red
for every major heading (h1–h3) plus a few panels — "Featured Work"
on the homepage, "At a Glance" and the illustration space on About,
and the intro block on Contact. Smaller text under headings (dates,
locations, captions) stays dark grey, not tomato. The small blue
squiggle under the logo and the tomato squiggle used on a few "Read"
and "Get in Touch" links is the site's one repeating graphic — it's
just a line, not tied to any theme, so feel free to reuse it
elsewhere or leave it as is.
