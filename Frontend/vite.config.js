import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/PieTube/',
  build: {
    outDir: 'dist',
  },
  server: {
    historyApiFallback: true,
  },
})
