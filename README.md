# Andrew Angulo — Portfolio

Portfolio of Andrew Angulo — Software engineer building fintech platforms, AI tools, and scalable digital products.

## Tech stack

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Local development

```sh
npm i
npm run dev
```

## Build

```sh
npm run build
npm run preview
```

Preview the production build at `http://localhost:4173/andrew-cv/` (or the port Vite reports).

## GitHub Pages

The site is deployed to **https://andrewjulo.github.io/andrew-cv/** via GitHub Actions.

- **Automatic deploys**: Every push to `main` builds and deploys to GitHub Pages.
- **Enable Pages**: In the repo go to **Settings → Pages → Build and deployment**, set **Source** to **GitHub Actions** (not “Deploy from a branch”). The workflow is `.github/workflows/deploy-pages.yml`.
- Local dev with the same base path: run `npm run dev` and open **http://localhost:8080/andrew-cv/**.

### If the site doesn't appear

1. **Set the Pages source**: **Settings → Pages**. Under "Build and deployment", set **Source** to **GitHub Actions**. If it's still "Deploy from a branch", the workflow runs but nothing is published.
2. **Check the workflow run**: Open the **Actions** tab and open the latest "Deploy to GitHub Pages" run. If the build or deploy job failed, fix the error shown there.
3. **Wait a minute**: After a successful deploy, the site can take 1–2 minutes to be available.
