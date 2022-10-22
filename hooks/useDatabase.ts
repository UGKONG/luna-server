/* eslint-disable import/no-anonymous-default-export */
import { createConnection } from "mysql";

export interface Config {
  host: string;
  user: string;
  password: string;
  database: string;
  dateStrings: boolean;
  multipleStatements: boolean;
}
export interface Return {
  error: Error | null;
  result: any;
  sql: string;
}

/**
 * @example
 * const { error, result, sql } = await useDatabase(`
 *   SELECT * FROM 테이블명
 *   WHERE USER_ID = ? AND USER_PW = ?;
 * `, ['USER_ID', 'USER_PW']);
 */
export default (sql: string, sqlParams?: Array<string>): Promise<Return> => {
  const config: Config = {
    host: process.env.HOST ?? "",
    user: process.env.USER ?? "",
    password: process.env.PASSWORD ?? "",
    database: process.env.DATABASE ?? "",
    dateStrings: true,
    multipleStatements: true,
  };
  const db = createConnection(config);

  return new Promise((success) => {
    db.query(sql, sqlParams, (error: Error | null, result: any) => {
      db.end();
      if (error) console.log(error);
      success({ error, result, sql });
    });
  });
};
