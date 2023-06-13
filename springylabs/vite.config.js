// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        blog: resolve(__dirname, 'blog/the-start.html'),
        about: resolve(__dirname, 'about/team.html'),
        pricing: resolve(__dirname, 'pricing.html'),
      },
    },
  },
})