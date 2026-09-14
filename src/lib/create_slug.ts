// Adapted from https://equk.co.uk/2023/02/02/generating-slug-from-title-in-astro/

import { GENERATE_SLUG_FROM_TITLE } from "../config";

export default function (title: string, staticSlug: string) {
  return !GENERATE_SLUG_FROM_TITLE
    ? staticSlug
    : title
        // remove leading & trailing whitespace
        .trim()
        // output lowercase
        .toLowerCase()
        // normalizar acentos/diacriticos: á->a, é->e, ñ->n, etc.
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        // replace spaces
        .replace(/\s+/g, "-")
        // remove special characters (emojis, signos, etc.)
        .replace(/[^\w-]/g, "")
        // colapsar guiones repetidos
        .replace(/-+/g, "-")
        // remove leading & trailing separtors
        .replace(/(^-+)|(-+$)/g, "");

}
