"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.aiRouter = void 0;
const trpc_1 = require("../core/trpc");
const aiService_1 = require("../services/aiService");
exports.aiRouter = (0, trpc_1.router)({
    process: trpc_1.procedure.input((input) => {
        if (typeof input !== 'object' || input === null || !('query' in input)) {
            throw new Error("Invalid input: expected an object with a 'query' property");
        }
        const data = input;
        if (typeof data.query !== 'string') {
            throw new Error("Invalid input: 'query' must be a string");
        }
        return data;
    }).query(async ({ input }) => {
        const service = new aiService_1.AIService();
        const response = await service.processQuery(input.query);
        return { response };
    })
});
//# sourceMappingURL=ai.js.map