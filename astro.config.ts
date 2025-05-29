import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import { type AstroUserConfig } from 'astro';
import rehypeKatex from 'rehype-katex';
import behead from 'remark-behead';
import remarkMath from 'remark-math';

export default {
  site: 'https://opentut.gr.jp',
  build: { format: 'file' },
  integrations: [react(), tailwind()],
  markdown: {
    remarkPlugins: [[behead, { minDepth: 2 }], remarkMath],
    rehypePlugins: [rehypeKatex],
  },
} satisfies AstroUserConfig;
