import sanity from '@sanity/astro'
import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import vercel from '@astrojs/vercel/serverless'

// https://astro.build/config
export default defineConfig({
    output: 'server',
    adapter: vercel(),
    integrations: [
        mdx(),
        sitemap(),
        sanity({
            projectId: 'chqqc08z',
            dataset: 'production',
            useCdn: false,
            studioBasePath: '/admin',
        }),
        react(),
        tailwind(),
    ],
})
