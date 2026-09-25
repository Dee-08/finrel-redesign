# Finrel redesign

The website source is in `site/`. The browser-ready website is in `site/dist/`.

## VS Code Live Server

Open this repository folder in VS Code. Stop Live Server if it is already running, then click **Go Live** again. Open `http://127.0.0.1:5500/`.

The workspace settings serve `site/dist` as the website root, allowing `/style.css`, `/assets/` and the page links to resolve correctly. If you open the `site` folder instead, its own workspace settings serve `dist`.

Do not use `/site/dist/index.html` after restarting Live Server; the homepage is now `/`.

## Vercel

Keep the Vercel project's **Root Directory** at the repository root (blank or `.`). The checked-in `vercel.json` runs the generator in `site` and publishes only `site/dist`.

If the Vercel dashboard has an old Root Directory override, clear it and redeploy. The GitHub integration will otherwise deploy this configuration automatically when a commit is pushed.

## Build and preview

With Node.js 20 or newer:

```sh
cd site
npm run build
npm run check
npm run dev
```

The built-in preview runs at `http://127.0.0.1:4173/`. No dependency installation is needed. Rebuild after editing content or templates.

See [the detailed handover guide](site/README.md) for editing content and the existing form/online-store integration limitations.
