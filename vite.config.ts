// / <reference types="vitest" />
// / <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  json: {
    /* 
    If set to true, imported JSON will be transformed into export 
    default JSON.parse("...") which is significantly more 
    performant than Object literals, especially when the JSON file is large. 
    */
    stringify: true
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@components': fileURLToPath(new URL('./src/Components', import.meta.url)),
      '@mixins': fileURLToPath(new URL('./src/Mixins', import.meta.url)),
      '@views': fileURLToPath(new URL('./src/Views', import.meta.url)),
      '@type': fileURLToPath(new URL('./src/Types', import.meta.url)),
      '@hooks': fileURLToPath(new URL('./src/Hooks', import.meta.url)),
      '@utils': fileURLToPath(new URL('./src/Utilities', import.meta.url)),
      '@helpers': fileURLToPath(new URL('./src/Helpers', import.meta.url)),
      '@services': fileURLToPath(new URL('./src/Services', import.meta.url)),
      '@enums': fileURLToPath(new URL('./src/Enums', import.meta.url)),
      '@assets': fileURLToPath(new URL('./src/Assets', import.meta.url)),
      '@bootstrap': fileURLToPath(new URL('./node_modules/bootstrap/dist/css', import.meta.url))
    },
    extensions: [
      '.js',
      '.jsx',
      '.ts',
      '.tsx'
    ]
  },
  server: {
    host: 'localhost',
    port: 3000,
    strictPort: true,
    open: true
  },
  build: {
    outDir: 'build',
    sourcemap: true
  }
});
