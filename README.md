# John Yu · Portfolio

Single-page portfolio positioning John for Business / Sales Operations Analyst roles.
Built with Vite + React, plain CSS on a token system, self-hosted fonts (Switzer, Geist Mono).

## Commands

```
npm install       # once
npm run dev       # local dev server
npm run build     # production build → dist/
npm run preview   # serve the production build locally
```

## Content

All copy lives in `src/content.js`. Every claim traces to John's resume; don't add
a figure the resume doesn't support. To add a metric to a case study later, edit
its `outcome` string, or give it a `metric: { value, label }` to surface the number
in the sticky rail.

## Deploying on Vercel

Point the Vercel project at this directory (`john-yu-portfolio`). Framework preset:
Vite. Build command `npm run build`, output directory `dist`. If the production
domain is not `john-yu-portfolio.vercel.app`, update the `og:url` / `og:image` /
`twitter:image` URLs in `index.html`.
