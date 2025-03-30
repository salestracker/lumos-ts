import { Database } from 'sql.js';
export declare class BaseRepository {
    db: Database;
    constructor(db: Database);
    execute(query: string, params?: any[]): Promise<any>;
}
