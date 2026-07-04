// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import sitemap from "@astrojs/sitemap";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://domenico-tenace-open-labs.github.io/daily-prompt/",
  integrations: [
    starlight({
      title: "SpellBook of Prompt",
      description:
        "Curated AI prompts for developers, content creators and teams who want faster, better results with ChatGPT, Claude and other LLMs.",
      components: {
        Head: "./src/components/StarlightHead.astro",
      },
      customCss: ["./src/styles/global.css"],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/Domenico-Tenace-Open-Labs/daily-prompt",
        },
      ],
      favicon: "/favicon.ico",
      head: [
        {
          tag: "meta",
          attrs: { name: "description", content: "Curated AI prompts for developers, content creators and teams who want faster, better results with ChatGPT, Claude and other LLMs." },
        },
        {
          tag: "meta",
          attrs: { property: "og:type", content: "website" },
        },
        {
          tag: "meta",
          attrs: { property: "og:site_name", content: "SpellBook of Prompt" },
        },
        {
          tag: "meta",
          attrs: { property: "og:title", content: "SpellBook of Prompt | Curated AI Prompts" },
        },
        {
          tag: "meta",
          attrs: { property: "og:description", content: "A curated collection of tested prompts for content creation, technical writing and workflow automation." },
        },
        {
          tag: "meta",
          attrs: { property: "og:image", content: "/og-image.svg" },
        },
        {
          tag: "meta",
          attrs: { name: "twitter:card", content: "summary_large_image" },
        },
        {
          tag: "meta",
          attrs: { name: "twitter:title", content: "SpellBook of Prompt | Curated AI Prompts" },
        },
        {
          tag: "meta",
          attrs: { name: "twitter:description", content: "A curated collection of tested prompts for content creation, technical writing and workflow automation." },
        },
        {
          tag: "meta",
          attrs: { name: "twitter:image", content: "/og-image.svg" },
        },
        {
          tag: "meta",
          attrs: { name: "keywords", content: "AI prompts, prompt engineering, ChatGPT prompts, Claude prompts, content creation prompts, developer prompts" },
        },
      ],
    }),
    sitemap(),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
