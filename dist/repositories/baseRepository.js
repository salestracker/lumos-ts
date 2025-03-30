"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRepository = void 0;
class BaseRepository {
    constructor(db) {
        this.db = db;
    }
    // Execute a SQL query with optional parameters.
    async execute(query, params = []) {
        return this.db.exec(query, params);
    }
}
exports.BaseRepository = BaseRepository;
