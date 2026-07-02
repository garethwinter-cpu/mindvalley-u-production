import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => ({
  plugins: [react()],
  // Served from https://garethwinter-cpu.github.io/mindvalley-u-production/
  base: command === 'build' ? '/mindvalley-u-production/' : '/',
}))
