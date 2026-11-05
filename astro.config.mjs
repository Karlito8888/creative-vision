// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://creative-vision.charmaweb.com",
  trailingSlash: "never",
  build: { format: "file" },
  compressHTML: true,
  integrations: [sitemap()],
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Barlow",
      cssVariable: "--font-sans",
      weights: [400, 500],
      styles: ["normal"],
      subsets: ["latin"],
      fallbacks: ["system-ui", "sans-serif"],
    },
    {
      provider: fontProviders.fontsource(),
      name: "Barlow Condensed",
      cssVariable: "--font-display",
      weights: [600, 700],
      styles: ["normal"],
      subsets: ["latin"],
      fallbacks: ["Impact", "sans-serif"],
    },
  ],
});
