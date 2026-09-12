#!/usr/bin/env node
// Genera el CV en PDF a partir de cv/cv.md (fuente unica de verdad).
// Uso:  npm run cv:pdf
// Nota: se ejecuta en LOCAL. El PDF resultante (public/cv/...) se commitea
// y es lo que descarga el sitio; el build de Netlify no regenera el PDF.

import { mdToPdf } from "md-to-pdf";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

const MD_PATH = join(ROOT, "cv", "cv.md");
const CSS_PATH = join(ROOT, "cv", "cv.css");
const OUT_DIR = join(ROOT, "public", "cv");
const OUT_PATH = join(OUT_DIR, "CV-Luis-Miguel-Palacios.pdf");

async function main() {
  const css = await readFile(CSS_PATH, "utf8");

  const pdf = await mdToPdf(
    { path: MD_PATH },
    {
      css,
      pdf_options: { format: "A4", margin: "18mm 16mm", printBackground: true },
      launch_options: { args: ["--no-sandbox", "--disable-setuid-sandbox"] },
    }
  );

  if (!pdf || !pdf.content) {
    throw new Error("No se pudo generar el PDF.");
  }

  await mkdir(OUT_DIR, { recursive: true });
  await writeFile(OUT_PATH, pdf.content);

  console.log("✔ CV generado: public/cv/CV-Luis-Miguel-Palacios.pdf");
  console.log("  Recuerda commitear el PDF para que el sitio lo sirva.");
}

main().catch((err) => {
  console.error("✖ Error generando el CV:", err.message || err);
  process.exit(1);
});
