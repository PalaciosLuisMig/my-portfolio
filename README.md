# Portafolio de Luis Palacios

Portafolio web personal construido con Astro, Tailwind CSS y DaisyUI. Presenta perfil,
experiencia laboral, proyectos, blog, educación y datos de contacto, con modo claro/oscuro
y navegación tipo SPA mediante View Transitions.

Sitio en producción: https://luispalacios.dev

## 🧱 Stack

- **Astro 4** — framework principal
- **Tailwind CSS** + **DaisyUI** — estilos y temas (`fantasy` claro / `dark` oscuro)
- **@tailwindcss/typography** y **tailwindcss-animated** — tipografía y animaciones
- **astro-icon** — íconos SVG
- **dayjs** — formato de fechas en español
- **Content Collections** con validación **Zod** — blog y proyectos en Markdown
- **Netlify** — despliegue (adaptador `@astrojs/netlify`)

## 📁 Estructura del proyecto

```text
src/
├── assets/            # Imágenes usadas dentro del bundle
├── components/        # Componentes reutilizables (.astro)
├── config.ts          # Datos del sitio: menú, stack, experiencia, educación, etc.
├── content/
│   ├── config.ts      # Esquemas Zod de las colecciones
│   ├── blog/          # Posts del blog (.md)
│   └── projects/      # Proyectos (.md)
├── icons/             # Íconos SVG para astro-icon
├── layouts/           # Layouts (Layout, PostLayout, ProjectLayout)
├── lib/               # Utilidades (generación de slugs)
└── pages/             # Rutas del sitio
public/                # Assets estáticos (CV, imágenes de proyectos, logos)
```

## 🚀 Puesta en marcha

Requisitos: Node.js y [pnpm](https://pnpm.io/) (el repo incluye `pnpm-lock.yaml`).

```sh
pnpm install       # instalar dependencias
pnpm dev           # servidor de desarrollo en http://localhost:4321
pnpm build         # astro check + build de producción en ./dist/
pnpm preview       # previsualizar el build local
```

## ✍️ Personalización del contenido

- **Datos generales** (menú, stack tecnológico, experiencia, educación, premios, email,
  título/descripción del sitio y enlace del CV): editar `src/config.ts`.
- **CV**: colocar el PDF en `public/cv/` y actualizar `CV_DOWNLOAD` / `CV_FILENAME` en `src/config.ts`.
- **Proyectos**: agregar un archivo `.md` en `src/content/projects/` con el frontmatter definido
  en el esquema (`title`, `description`, `pubDate`, `important`, `heroImage`, `github`, `website`,
  `tags`, `skills`, ...).
- **Blog**: agregar un archivo `.md` en `src/content/blog/`.

### Nota sobre los logos de `skills`

En cada proyecto, los `skills` renderizan badges de [shields.io](https://shields.io/) usando
slugs de [simple-icons](https://simpleicons.org/). El campo `logo` debe usar el slug en
minúscula (por ejemplo `react`, `html5`, `css3`), de lo contrario el ícono no se muestra.

## 🌗 Temas

El tema (claro/oscuro) se gestiona en `src/components/ThemeController.astro` y se persiste en
`localStorage`, respetando las transiciones de página de Astro.

## 📄 Licencia

Portafolio open source. Siéntete libre de tomarlo como referencia.
