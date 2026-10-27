# vinnyhorgan.com

Vinny Horgan's personal site. Astro 7, TypeScript, Tailwind 4, JetBrains
Mono, Catppuccin colours. A static site, served by a Cloudflare Worker.

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # static site in dist/
npx astro check   # type check
npm run deploy    # build, then deploy the site and the www redirect
```

- `src/data/work.ts`: every entry on the work page.
- `src/data/stickers.ts`: the stickers in the margins, with where each
  image comes from.
- `src/content/writing/`: posts. `from: brain` marks the 2025 posts carried
  over unchanged from the old blog; their content is never edited.
- `wrangler.jsonc`: the Worker `vinnyhorgan`, static assets only, on
  vinnyhorgan.com. `www/`: the Worker `vinnyhorgan-www`, which redirects
  www.vinnyhorgan.com to the apex.
