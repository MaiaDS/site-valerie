import sanity from "@sanity/astro";
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import react from "@astrojs/react";
import sanityIntegration from "@sanity/astro";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), sitemap(), sanity({
    projectId: "chqqc08z",
    dataset: "production",
    useCdn: false,
    studioBasePath: "/admin"
  }), react()]
});