# Portfolio (Vite + React)

## Chat API (Vercel)

- **Route:** `POST /api/chat` with JSON `{ "message": "..." }` → `{ "reply": "..." }`.
- **Secrets:** Set `GROQ_API_KEY` in [Vercel → Project → Settings → Environment Variables](https://vercel.com/docs/projects/environment-variables). Never commit keys.
- **Local:** Copy `.env.example` to `.env` and add your key. Run `npx vercel dev` to serve the Vite app and `/api/chat` together. Plain `npm run dev` (Vite only) has no `/api` route the UI falls back to rule-based replies automatically.

## Deploy

Connect the repo to Vercel, set `GROQ_API_KEY`, and deploy. `vercel.json` rewrites non-API paths to `index.html` so client routing works; `/api/*` stays as serverless functions.

## Security

Rotate any API keys that were ever committed in public folders (e.g. old demo scripts).
