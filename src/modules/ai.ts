import { router, procedure } from '../core/trpc';
import { AIService } from '../services/aiService';

export const aiRouter = router({
  process: procedure.input((input: unknown) => {
    if (typeof input !== 'object' || input === null || !('query' in input)) {
      throw new Error("Invalid input: expected an object with a 'query' property");
    }
    const data = input as { query: string };
    if (typeof data.query !== 'string') {
      throw new Error("Invalid input: 'query' must be a string");
    }
    return data;
  }).query(async ({ input }) => {
    const service = new AIService();
    const response = await service.processQuery(input.query);
    return { response };
  })
});
