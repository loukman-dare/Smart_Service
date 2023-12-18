import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import { ViteGhPages } from 'vite-plugin-gh-pages'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),VitePWA(),
    ViteGhPages(),],
})
