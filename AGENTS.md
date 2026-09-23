# AGENTS.md

Personal portfolio site (Spanish content) built with Astro 4. Deployed to Netlify. Production: https://luispalacios.dev

## Commands
- Install / deps must use **pnpm** (`pnpm install`, run scripts via `pnpm <script>`). Never npm/yarn.
- `pnpm dev` — dev server on http://localhost:4321
- `pnpm build` — runs `astro check` (the typecheck) then `astro build`. Use this as the verification step; there is no separate lint/test/typecheck script.
- `pnpm preview` — preview the production build
- `pnpm new:post "Título"` — scaffolds `src/content/blog/<slug>.md`
- `pnpm cv:pdf` — regenerates the CV PDF (local only, see below)

## Architecture
- SSR site: `astro.config.mjs` sets `output: "server"` with the `@astrojs/netlify` adapter — not a static build. Contact form posts to `/___forms` asset at `/__forms.html` (Netlify Forms in SSR) via `src/pages/contact.astro`.
- Content Collections (`src/content/config.ts`): `blog` and `projects`, Markdown + Zod validation. Gotchas: `tags` array must be unique; project `skills` objects must be unique by `logo`+`name`.
- Site-wide data (menu, stack, experience, education, CV link, `GENERATE_SLUG_FROM_TITLE`) lives in `src/config.ts`, not in pages.
- Path aliases configured: `@components/*`, `@layouts/*`, `@lib/*`, `@content/*`.

## Styling (Tailwind v4 + daisyUI 5)
- No Tailwind config file. Tailwind is wired through `@tailwindcss/vite` in `astro.config.mjs`; CSS lives in `src/assets/app.css`.
- daisyUI is loaded via `@plugin "daisyui"` in `app.css` with a theme list; default themes are `fantasy` (light) and `dark` (`--prefersdark`).
- The `dark:` variant is re-bound to a `.dark` class on `<html>` (`@custom-variant dark` in app.css), toggled by `src/components/ThemeController.astro` and persisted in localStorage. `dark:*` classes in markup assume this manual toggle.
- Use daisyUI classes/components; see `.claude/skills/daisyui/` for daisyUI usage guidance.

## Workflows & gotchas
- **Slugs**: normalize by lowercasing and stripping diacritics (`src/lib/create_slug.ts`, same logic in `scripts/new-post.mjs`). Blog frontmatter `url` is a slug, e.g. `banco-emisor-vs-banco-adquirente`; the file lives in `src/content/blog/<slug>.md`.
- **CV**: `cv/cv.md` (+ `cv/cv.css`) is the single source of truth. `pnpm cv:pdf` runs **only locally** and writes `public/cv/CV-Luis-Miguel-Palacios.pdf`; the PDF must be committed, Netlify never regenerates it. Filename is bound by `CV_DOWNLOAD`/`CV_FILENAME` in `config.ts`.
- **Netlify build** (`netlify.toml`): uses `pnpm install --no-frozen-lockfile` deliberately — the Windows-generated lockfile lacks `@tailwindcss/oxide-linux-x64-gnu` for the Linux build. Don't "fix" this. Build env pins Node 20.
- **Skills badges**: project `skills[].logo` are lowercase simple-icons slugs rendered as shields.io badges; wrong case = missing icon.
- New blog posts expect `heroImage: "/blogs/<slug>.webp"` in `public/blogs/` (or point it at a remote image).
- Content and commit messages are in Spanish; commits use conventional prefixes (`feat:`, `fix:`, `chore:`, ...) on feature branches merged via PRs to `master`.

## Git & PRs (regla de oro)
- **NUNCA** hacer `git commit`, `git push` ni crear/mergear PRs por iniciativa propia. Solo hacerlo cuando el usuario lo pida **explícitamente** (p. ej. "haz commit", "sube los cambios", "crea el MR/PR").
- Al terminar una tarea, dejar los cambios listos en el working tree y avisar al usuario qué se hizo y qué falta (commit/branch/PR) en lugar de ejecutarlo.
- Si el usuario pide commit/PR, confirmar el alcance exacto antes: solo los archivos de esta tarea o todo el working tree.
- Recordar que el entorno puede carecer de identidad git (`user.name`/`user.email`) y de sesión de `gh`; avisarlo si falta algo para poder operar.