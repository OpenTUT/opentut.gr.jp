import react from '@astrojs/react';
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import behead from 'remark-behead';

// https://astro.build/config
export default defineConfig({
  site: 'https://opentut.gr.jp',
  integrations: [react(), tailwind()],
  markdown: {
    remarkPlugins: [[behead, { minDepth: 2 }]],
  },
});
