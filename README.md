# UX Research Portfolio Template

A 5-page static site: `index.html` (home), `about.html`, `ai.html`, `case-study.html` (case study template), `design-system.html` (token/component reference), `styles.css`.

Design system extracted from a reference portfolio: Fraunces for display/headlines, Caveat for the handwritten greeting accent, Inter for body/UI, a pale blue `--accent` for small UI states, and a soft pink→peach `--gradient` for decorative backgrounds. See `design-system.html` for the full token reference.

## Customize

- **index.html** — replace "Tiffany Kanamaru", role, bio, and the 3 project cards. Duplicate a project card block for more projects.
- **case-study.html** — duplicate this file per project (e.g. `case-study-onboarding.html`) and link to it from the matching card in `index.html`. Fill in role/team/timeline/methods, problem, approach, insights, stats, and outcome.
- **Colors / fonts** — edit the tokens at the top of `styles.css` (`:root`). `design-system.html` documents every token live.
- **Password** — the whole site is gated by `password-gate.js` (default password: `2026`). Change the `PASSWORD` value there, or delete the `<script src="password-gate.js">` tag from each page to remove the gate.
- **Resume** — drop your own `resume.pdf` into this folder; the nav/footer already link to it.

## Preview locally

From this folder, run:

```
python3 -m http.server 8000
```

Then open `http://localhost:8000` in a browser.

## Deploy

Any static host works — no build step required:

- **GitHub Pages**: push this folder to a repo, enable Pages in repo settings.
- **Netlify / Vercel**: drag-and-drop this folder in their dashboard, or connect the repo.
