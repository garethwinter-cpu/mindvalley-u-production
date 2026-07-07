import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Relative asset paths so the SAME build works on any mount point —
  // GitHub Pages (/mindvalley-u-production/), Cloud Run (root), etc.
  base: './',
})
