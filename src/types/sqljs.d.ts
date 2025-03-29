declare module 'sql.js' {
  export interface Database {
    exec(query: string, params?: any[]): any;
    run(sql: string, params?: any[]): void;
    close(): void;
  }

  export interface InitSqlJsConfig {
    locateFile?(filename: string): string;
  }

  interface SqlJsStatic {
    Database: { new(...args: any[]): Database };
  }

  export default function initSqlJs(config?: InitSqlJsConfig): Promise<SqlJsStatic>;
}
