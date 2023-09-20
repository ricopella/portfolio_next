import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ['futura-pt', 'sans-serif'],
    },
    extend: {
      borderColor: {
        'extra-color': 'var(--extra-light-grey)',
      },
      height: {
        resumeDesktop: `297mm`,
      },
      gridTemplateColumns: {
        resumeBodyDesktop: `13.5rem 1fr`,
        'max-max-1fr': 'max-content max-content 1fr',
        'max-3': `repeat(3, max-content)`,
        '1fr-mx': `1fr max-content`,
      },
      gridTemplateRows: {
        'max-2': `repeat(2, max-content)`,
      },
      maxWidth: {
        resumeSmall: 'calc(100vw - 2rem)',
        resumeDesktop: `210mm`,
      },
      width: {
        resumeSmall: 'calc(100vw - 2rem)',
        resumeDesktop: `210mm`,
      },
      screens: {
        resume: '53.125rem',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: ['emerald', 'forest'],
  },
};
export default config;
