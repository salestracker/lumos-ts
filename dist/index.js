"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRouter = void 0;
const express_1 = __importDefault(require("express"));
const trpcExpress = __importStar(require("@trpc/server/adapters/express"));
const trpc_1 = require("./core/trpc");
const health_1 = require("./modules/health");
const ai_1 = require("./modules/ai");
exports.appRouter = (0, trpc_1.router)({
    health: health_1.healthRouter,
    ai: ai_1.aiRouter,
    // Future module registrations can go here, e.g., inventory, etc.
});
if (require.main === module) {
    const app = (0, express_1.default)();
    app.use('/trpc', trpcExpress.createExpressMiddleware({
        router: exports.appRouter,
    }));
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
}
//# sourceMappingURL=index.js.map
