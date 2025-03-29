import { router, procedure } from '../core/trpc';

export const healthRouter = router({
  check: procedure.query(() => {
    return { status: 'ok' };
  }),
});
