/*
 * Main entry point for lumos-ts.
 * Re-exports core features and applies essential fixes.
 */

// Polyfill for process in browser environments
if (typeof process === 'undefined') {
  (window as any).process = { env: {} };
}

// Fix for MIME module handling: import and re-export the mime-types package
import mime from 'mime-types';
export { mime };

// Re-export core members from the internal trpc module
export { router, procedure } from './core/trpc';
