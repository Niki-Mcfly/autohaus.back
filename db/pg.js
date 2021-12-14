import { Pool } from "pg";

const connectionString = process.env.PG_CONNECTIONSTRING

const pool = new Pool({
  connectionString,
});


export default pool;