import { defineConfig } from 'vite'
import { nodePolyfills } from 'vite-plugin-node-polyfills'
import react from '@vitejs/plugin-react'

// Simple Vite config with Node.js polyfills for browser environment
export default defineConfig({
  plugins: [
    react(),
    // This plugin adds Node.js polyfills required by lumos-ts
    nodePolyfills({
      // Add process global
      globals: {
        process: true
      }
    })
  ]
})