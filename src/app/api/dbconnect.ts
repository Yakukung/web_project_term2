// dbconnect.ts
import mysql2 from 'mysql2';
import util from "util";
export const conn = mysql2.createPool({
  connectionLimit: 10,
  host: "202.28.34.197",
  user: "web66_65011212083",
  password: "65011212083@csmsu",
  database: "web66_65011212083",
});
export { mysql2 };
export const queryAsync = util.promisify(conn.query).bind(conn);