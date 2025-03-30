"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.healthRouter = void 0;
const trpc_1 = require("../core/trpc");
exports.healthRouter = (0, trpc_1.router)({
    check: trpc_1.procedure.query(() => {
        return { status: 'ok' };
    }),
});
//# sourceMappingURL=health.js.map
