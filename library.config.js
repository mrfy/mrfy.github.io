import autoprefixer from 'autoprefixer';
import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';
import tailwind from 'tailwindcss';
import tailwindConfig from './tailwind.config.mjs';

// https://vitejs.dev/config/sad
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwind(tailwindConfig), autoprefixer],
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/components/GitProfile.jsx'),
      name: 'GitProfile',
      fileName: (format) => `gitprofile.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
        },
      },
    },
  },
});
