import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import ViteGhPages from 'vite-plugin-gh-pages';

export default defineConfig({
  plugins: [
    react(),
    
  ],
  base: "/Smart_Service",
});
