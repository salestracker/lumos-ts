// Polyfill for process in browser environments (if needed)
if (typeof process === 'undefined') {
  (window as any).process = { env: {} };
}

// Re-export core members from the correct location.
// This ensures that consumers can correctly import router, procedure, and middleware.
export { router, procedure, createMiddleware as middleware } from './core/trpc';

// Import and re-export the MIME API so the consumers have a consistent MIME interface.
import mime from 'mime-types';
export { mime };