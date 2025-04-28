import type { Config } from 'tailwindcss';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Tailwind'in tarayacağı dosyalar
    './src/app/**/*.css', // Tailwind'in tarayacağı CSS dosyaları
  ],
  theme: {
    extend: {
      // Burada özelleştirmeler yapabilirsiniz
      colors: {
        primary: '#1D4ED8',
        secondary: '#9333EA',
        mycolor1: '#f4f4f4',
        mycolor2: '#202f1f',
        mycolor3: '#e21818',
        mycolor4: '#00235b',
        mycolor5: '#ffdd83',
        mycolor6: '#98dfd6',
      },
    },
  },
  plugins: [
    forms, // Form stilleri için
    typography, // Tipografi stilleri için
  ],
};

export default config;
