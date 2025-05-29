import type { Config } from 'tailwindcss';

export default {
  theme: {
    extend: {
      colors: {
        'tut-red': '#c7000a',
      },
      typography: {
        DEFAULT: {
          css: {
            'blockquote p:first-of-type::before': false,
            'blockquote p:first-of-type::after': false,
          },
        },
      },
    },
  },
} satisfies Config;
