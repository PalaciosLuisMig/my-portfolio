/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("daisyui"),
    require("tailwindcss-animated"),
  ],
  daisyui: {
    themes: [
      {
        retro: {
          ...require("daisyui/src/theming/themes")["retro"],
        },
      },
      {
        fantasy: {
          ...require("daisyui/src/theming/themes")["fantasy"],
        },
      },
      {
        bumblebee: {
          ...require("daisyui/src/theming/themes")["bumblebee"],
        },
      },
      {
        corporate: {
          ...require("daisyui/src/theming/themes")["corporate"],
        },
      },
      {
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
        },
      },
    ],
    darkTheme: "dark",
    base: true,
  },
};
