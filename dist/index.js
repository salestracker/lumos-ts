"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mime = exports.middleware = exports.procedure = exports.router = void 0;
// Polyfill for process in browser environments (if needed)
if (typeof process === 'undefined') {
    window.process = { env: {} };
}
// Re-export core members from the correct location.
// This ensures that consumers can correctly import router, procedure, and middleware.
var trpc_1 = require("./core/trpc");
Object.defineProperty(exports, "router", { enumerable: true, get: function () { return trpc_1.router; } });
Object.defineProperty(exports, "procedure", { enumerable: true, get: function () { return trpc_1.procedure; } });
Object.defineProperty(exports, "middleware", { enumerable: true, get: function () { return trpc_1.createMiddleware; } });
// Import and re-export the MIME API so the consumers have a consistent MIME interface.
const mime_types_1 = __importDefault(require("mime-types"));
exports.mime = mime_types_1.default;
//# sourceMappingURL=index.js.map