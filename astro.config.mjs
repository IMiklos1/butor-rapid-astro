// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sanity from '@sanity/astro';
import react from '@astrojs/react';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://butorrapid.hu',
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sanity({
    projectId: '1ukhd4x6',
    dataset: 'production',
    useCdn: false,
    apiVersion: '2024-04-20',
  }), react(), icon(), sitemap()]
});