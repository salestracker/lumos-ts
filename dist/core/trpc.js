"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMiddleware = exports.procedure = exports.router = void 0;
const server_1 = require("@trpc/server");
const t = server_1.initTRPC.create();
exports.router = t.router;
exports.procedure = t.procedure;
exports.createMiddleware = t.middleware;
//# sourceMappingURL=trpc.js.map