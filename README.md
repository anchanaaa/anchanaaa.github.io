# Your portfolio site

A static site — no build step, no framework. Three files: `index.html`,
`style.css`, `script.js`. Open `index.html` in a browser to preview it
right now.

## Customize it

1. **Find-and-replace** `Your Name`, `you@example.com`, `yourname` (GitHub/LinkedIn)
   in `index.html` with your real details.
2. **Add your resume** as `resume.pdf` in this folder (the nav link expects it).
3. **Replace the placeholder project entries** in the `<ul class="log">` section
   of `index.html`. Each `<li class="entry">` needs:
   - `data-track="game"` or `data-track="ml"` (controls the filter + color)
   - a date, title, one/two-sentence description, tech stack list, and links
   - Duplicate an `<li>` block for each new project, delete the ones you don't need.
4. **Update the "Currently studying" list** in the About section if your modules change.
5. Colors and fonts live at the top of `style.css` under `:root` if you want to
   adjust the palette (`--amber` = game dev, `--violet` = ML).

## Deploy it for free (GitHub Pages)

1. Create a new GitHub repo, e.g. `yourname.github.io` (using your exact GitHub
   username makes the URL clean) — or any repo name if you're fine with a
   `/reponame` suffix in the URL.
2. Push these files to the repo:
   ```
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/yourname/yourname.github.io.git
   git push -u origin main
   ```
3. In the repo, go to **Settings → Pages**, set source to the `main` branch,
   root folder. Save.
4. Your site will be live at `https://yourname.github.io` (or
   `https://yourname.github.io/reponame`) within a couple of minutes.

Alternative hosts if you'd rather: **Netlify** or **Vercel** — both let you
drag-and-drop this folder and get a live URL with zero config.

## Adding new projects over the summer

Treat the build log as append-only — new entries go at the top, oldest at
the bottom, like commits. That's the whole point of framing it as a log:
it shows momentum, not just a static list.
