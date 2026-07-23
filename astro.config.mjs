// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://mingleli.com",
  markdown: {
    shikiConfig: {
      theme: "one-dark-pro",
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
