# Developer Portfolio

A personal portfolio and CV site built with **React and Vite**. It uses plain CSS with design tokens and has no UI or animation libraries.

## Quick start

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build → dist/
npm run preview    # serve the production build locally
npm run lint
```

## Project structure

```
public/            Static files served as-is (favicon, og-image.png, robots.txt, cv.pdf)
src/
├── assets/images/ Profile photo & project screenshots (imported from data files)
├── components/
│   ├── layout/    Navbar, Footer, Container, Section (page skeleton)
│   ├── common/    Reusable UI: Button, Badge, Icon, SectionTitle, SocialLinks, Reveal
│   └── <section>/ One folder per page section (hero, about, skills, projects, ...)
├── data/          ALL portfolio content. Edit these files, not the components.
├── hooks/         useTheme, useActiveSection, useReveal, useScrolled
├── utils/         dotGrid.js — drawing logic for the page background
├── pages/Home.jsx Composes the sections in order
├── App.jsx        Skip link + Navbar + main + Footer
└── index.css      Design tokens, reset, utilities, motion
```

Each component sits next to its own `.css` file.

## Customizing

| What                         | Where                                            |
| ---------------------------- | ------------------------------------------------ |
| Name, role, tagline, email   | `src/data/profile.js`                            |
| About text & facts           | `src/data/profile.js` → `about`                  |
| Social links                 | `src/data/social.js`                             |
| Skills                       | `src/data/skills.js`                             |
| Projects                     | `src/data/projects.js`                           |
| Experience / education       | `src/data/experience.js`                         |
| Certificates (optional)      | `src/data/certificates.js` (an empty array hides the section) |
| Nav items                    | `src/data/navigation.js`                         |
| Page title, SEO, Open Graph  | `index.html`                                     |
| CV file                      | add `public/cv.pdf`, then set `cvUrl: '/cv.pdf'` in `profile.js` |

Search the project for `[` to find every remaining placeholder.

### Profile photo

```js
// src/data/profile.js
import photo from '../assets/images/profile.jpg';
export const profile = { /* ... */ photo };
```

### Adding a project

Add an object to `src/data/projects.js`:

```js
import myShot from '../assets/images/my-project.webp';

{
  id: 'my-project',            // unique
  title: 'My Project',
  subtitle: 'What it is in one line',
  description: 'Problem, your role, outcome.',
  image: myShot,               // or null for a placeholder
  technologies: ['React', 'Node.js'],
  category: 'Web Development', // filter buttons are generated from categories
  github: 'https://github.com/you/my-project',
  demo: '',                    // '' hides the button
  featured: false,             // true → large card at the top
  status: '',                  // e.g. 'In progress'
}
```

Use WebP or AVIF screenshots about 1200×750 px (16:10).

### Theme and colors

All colors are CSS variables at the top of `src/index.css`. The light theme is in `:root` and the dark theme is in the two dark blocks; keep those two dark blocks identical. To change the accent color, edit `--color-accent`, `--color-accent-strong` (used for text, so check contrast) and `--color-accent-soft`. The site follows the OS theme until the visitor uses the toggle, which is then saved to `localStorage`.

### Background

The interactive dot grid behind the whole page lives in `src/components/layout/DotGridBackground.jsx`. Its look (dot spacing, glow radius, dot size) is set by `GRID` in `src/utils/dotGrid.js`, and its colors come from the theme tokens. It only animates while the mouse or page is moving, pauses in hidden tabs, and it stays static for visitors who turned on "reduce motion".

## Deploying

`npm run build` creates a static `dist/` folder. You can deploy it to Vercel, Netlify, GitHub Pages or Cloudflare Pages. Update the `[YOUR-DOMAIN]` URLs in `index.html` and add a `public/og-image.png` (1200×630).
