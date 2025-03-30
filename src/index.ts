/**
 * Browser-compatibility polyfill
 * Acts as an infrastructure adapter for browser environments
 */
if (typeof window !== 'undefined') {
  // Only run in browser context
  window.process = window.process || {
    env: {
      NODE_ENV: 'production',
      DEBUG_MIME: false // Prevents the error in mime library
    },
    platform: 'browser'
  };
}

// Original imports
import express from 'express';
import * as trpcExpress from '@trpc/server/adapters/express';
import { router } from './core/trpc';
import { healthRouter } from './modules/health';
import { aiRouter } from './modules/ai';

// Rest of your original code remains unchanged
export const appRouter = router({
  health: healthRouter,
  ai: aiRouter,
  // Future module registrations can go here, e.g., inventory, etc.
});

export type AppRouter = typeof appRouter;

if (require.main === module) {
  const app = express();

  app.use(
    '/trpc',
    trpcExpress.createExpressMiddleware({
      router: appRouter,
    })
  );

  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}