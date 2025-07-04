import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: './',
  resolve: {
    alias: {
      '@': '/src',
      '@/AnalyzerEngine': '/src/AnalyzerEngine',
      '@/ViewportEngine': '/src/ViewportEngine',
      '@/ControlCenter': '/src/ControlCenter',
      '@/DataManager': '/src/DataManager',
      '@/LayoutManager': '/src/LayoutManager',
      '@/types': '/src/types'
    }
  },
  server: {
    port: 3000,
    host: true
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'three': ['three', '@react-three/fiber', '@react-three/drei'],
          'utils': ['zustand', 'uuid']
        }
      }
    }
  }
})
