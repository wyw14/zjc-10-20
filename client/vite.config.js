import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 5220,
    proxy: {
      '/api': {
        target: 'http://localhost:3120',
        changeOrigin: true
      }
    }
  }
})
