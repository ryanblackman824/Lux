# Lux Prototype

A front end prototype of a ServiceNow style workspace, built to match the Figma design pixel-for-pixel. React + TypeScript + Vite + Tailwind CSS, no backend — all data is mocked in-component.

**Live demo:** https://my-prototype-ashen.vercel.app

## Pages

- **Home** — dashboard with an animated omni-bar, Top Priorities, Pending Tasks, Today's Progress, and Unassigned Cases.
- **List** — a filterable, groupable case list.
- **Record** — an incident record view with AI-generated Mission Brief, metrics, and a Next Best Action panel.
- **Case** — a case workspace with an Otto AI panel and case details.

Navigate between them via the left nav rail (click the logo to expand/collapse it).

## Getting started

```bash
npm install
npm run dev       # start the dev server
npm run build     # typecheck + production build
npm run preview   # preview the production build locally
```

## Structure

- `src/components/` — one file per page/widget/shared UI piece (`Button`, `Pill`, `NowIcon`, etc.)
- `src/lib/icons.ts` — the icon library: each icon is a `{ viewBox, markup }` entry, rendered through `NowIcon`.
- `src/index.css` — design tokens (colors, shadows) as CSS custom properties, consumed via `tailwind.config.js`.

## Notes

- This is a visual prototype only — no real API calls, auth, or persistence.
- Design fidelity (colors, spacing, shadows, icons) is checked against the Figma file directly; where a value looks like a raw hex/pixel instead of a token, it was confirmed against the real Figma node rather than guessed.
