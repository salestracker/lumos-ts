import express from 'express';
import * as trpcExpress from '@trpc/server/adapters/express';
import { router } from './core/trpc';
import { healthRouter } from './modules/health';
import { aiRouter } from './modules/ai';

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
