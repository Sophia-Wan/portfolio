# Contact form on your live site

Your `.env` file **only works on your computer**. The live URL does not read `.env` from the repo (and `.env` is gitignored).

Vite needs `VITE_WEB3FORMS_ACCESS_KEY` at **build time**, so you must add it where you host the site, then **redeploy**.

## Netlify

1. **Site configuration** → **Environment variables**
2. Add variable: **Key** `VITE_WEB3FORMS_ACCESS_KEY` — **Value** your Web3Forms access key (same as in local `.env`)
3. **Deploy** → **Trigger deploy** → **Clear cache and deploy site** (or push a new commit)

## Vercel

1. Project → **Settings** → **Environment Variables**
2. Add `VITE_WEB3FORMS_ACCESS_KEY` for **Production** (and Preview if you want)
3. **Redeploy** the latest deployment

## GitHub Pages (Actions)

Add the key as a **repository secret** (e.g. `VITE_WEB3FORMS_ACCESS_KEY`) and pass it into the build step:

`VITE_WEB3FORMS_ACCESS_KEY: ${{ secrets.VITE_WEB3FORMS_ACCESS_KEY }}`

## Check

After deploy, open the live contact page and submit a test — you should **not** see “This form isn’t available here yet”.
