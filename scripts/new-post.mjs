#!/usr/bin/env node
// Genera un nuevo post del blog a partir de un título.
// Uso:  npm run new:post "Mi nuevo título"
//       npm run new:post            (pregunta el título de forma interactiva)

import { writeFile, access, mkdir } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const __dirname = dirname(fileURLToPath(import.meta.url));
const BLOG_DIR = join(__dirname, "..", "src", "content", "blog");

// Convierte un título en slug (misma lógica que src/lib/create_slug.ts).
function slugify(title) {
  return title
    .trim()
    .toLowerCase()
    // normalizar acentos/diacriticos: á->a, é->e, ñ->n, etc.
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-")
    // quitar caracteres especiales (emojis, signos, etc.)
    .replace(/[^\w-]/g, "")
    // colapsar guiones repetidos
    .replace(/-+/g, "-")
    .replace(/(^-+)|(-+$)/g, "");
}

// Fecha en formato "Mmm DD YYYY" (ej. "Feb 08 2026"), igual que los posts existentes.
function formatDate(date) {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const dd = String(date.getDate()).padStart(2, "0");
  return `${months[date.getMonth()]} ${dd} ${date.getFullYear()}`;
}

async function fileExists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

async function main() {
  let title = process.argv.slice(2).join(" ").trim();

  if (!title) {
    const rl = createInterface({ input, output });
    title = (await rl.question("Título del post: ")).trim();
    rl.close();
  }

  if (!title) {
    console.error("✖ Debes indicar un título. Ej: npm run new:post \"Mi post\"");
    process.exit(1);
  }

  const slug = slugify(title);
  if (!slug) {
    console.error("✖ El título no genera un slug válido.");
    process.exit(1);
  }

  await mkdir(BLOG_DIR, { recursive: true });
  const filePath = join(BLOG_DIR, `${slug}.md`);

  if (await fileExists(filePath)) {
    console.error(`✖ Ya existe un post con ese slug: src/content/blog/${slug}.md`);
    process.exit(1);
  }

  const today = formatDate(new Date());
  const content = `---
title: "${title.replace(/"/g, '\\"')}"
description: "Escribe aquí una descripción breve del post."
pubDate: "${today}"
updatedDate: "${today}"
heroImage: "/blogs/${slug}.webp"
badge: ""
tags: []
url: "${slug}"
---

Escribe aquí el contenido de tu post en Markdown.
`;

  await writeFile(filePath, content, "utf8");

  console.log(`✔ Post creado: src/content/blog/${slug}.md`);
  console.log(`  • Título: ${title}`);
  console.log(`  • Fecha:  ${today}`);
  console.log(`  • Imagen esperada: public/blogs/${slug}.webp (colócala o cambia heroImage)`);
  console.log("");
  console.log("Siguiente paso: edita el archivo, haz commit y push para publicarlo.");
}

main().catch((err) => {
  console.error("✖ Error al crear el post:", err);
  process.exit(1);
});
