import { defineConfig } from 'vite';

export default defineConfig({
  define: {
    'process.env': {}  // Polyfill process.env as an empty object
  },
  resolve: {
    alias: {
      process: 'process/browser'  // Redirect process to a browser-compatible version
    }
  }
});
