"use strict";
/*
 * Main entry point for lumos-ts.
 * Re-exports core features and applies essential fixes.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.procedure = exports.router = exports.mime = void 0;
// Polyfill for process in browser environments
if (typeof process === 'undefined') {
    window.process = { env: {} };
}
// Fix for MIME module handling: import and re-export the mime-types package
const mime_types_1 = __importDefault(require("mime-types"));
exports.mime = mime_types_1.default;
// Re-export core members from the internal trpc module
var trpc_1 = require("./core/trpc");
Object.defineProperty(exports, "router", { enumerable: true, get: function () { return trpc_1.router; } });
Object.defineProperty(exports, "procedure", { enumerable: true, get: function () { return trpc_1.procedure; } });
//# sourceMappingURL=index.js.map