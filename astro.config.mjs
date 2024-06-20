import react from '@astrojs/react';
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import behead from 'remark-behead';

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [[behead, { minDepth: 2 }]],
  },
  integrations: [react(), tailwind()],
});
