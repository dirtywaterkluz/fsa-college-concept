# Florida Sheriffs College and Training Institute Concept Website

This is a static React concept website built with Vite and Tailwind CSS for presenting the proposed Florida Sheriffs College and Training Institute.

The site is intentionally written as a concept. It does not represent an approved college, degree-granting entity, or final partnership structure. FSA is presented as the coordinating front door, while partner colleges and universities would provide academic programs, credit evaluation, admissions, transcripts, certificates, and degrees.

## Run Locally

```bash
npm install
npm run dev
```

Then open the local URL shown by Vite.

## Build

```bash
npm run build
```

## GitHub Pages Version

Generate the single-file GitHub Pages version:

```bash
npm run build:github-pages
```

This writes `docs/index.html`. To publish without paying Squarespace, push this repository to GitHub and enable Pages using:

- Deploy from branch: `main` branch, `/docs` folder

## Content Structure

- `src/data/pathways.ts`: education pathway cards
- `src/data/trainingPrograms.ts`: sample training and certificate categories
- `src/data/faqs.ts`: FAQ content
- `src/data/roadmap.ts`: four-phase roadmap
- `src/data/partners.ts`: partner opportunity categories
- `docs/`: supporting concept documents for leadership and partner review

## Editing Notes

Most page content is either in `src/App.tsx` or the editable data files under `src/data`. The placeholder interest form has no backend by design.
