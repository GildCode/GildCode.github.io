import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  base: '/GildCode.github.io/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})

