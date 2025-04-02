import { Database } from 'sql.js';

export class BaseRepository {
  db: Database;

  constructor(db: Database) {
    this.db = db;
  }

  // Execute a SQL query with optional parameters.
  async execute(query: string, params: any[] = []): Promise<any> {
    return this.db.exec(query, params);
  }
}
