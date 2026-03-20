# Profile Site

Professional profile website built with Vite, React, TypeScript, and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Then open your browser to:

`http://localhost:5173/`

If port `5173` is already in use, Vite will print the correct local URL in the terminal (for example `http://localhost:5174/`).

## Update profile content from profile.md

After editing `profile.md`, run:

```bash
npm run sync:profile
```

This regenerates `src/data/profile.ts` from the markdown file. Then refresh the browser (or keep `npm run dev` running for live updates).

## Quality checks

```bash
npm run lint
npm run test
npm run build
```
