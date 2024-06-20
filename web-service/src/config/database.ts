import pg from "pg";

const pool = new pg.Pool({
  user: process.env.RDB_USER || "aus-user",
  database: process.env.RDB_DATABASE || "aus",
  password: process.env.RDB_PASSWORD || "aus2025",
  port: +(process.env.RDB_PORT || 5433),
  host: process.env.RDB_HOST || "localhost",
});

process.on("exit", function () {
  pool.end();
});

/**
 * Sends SQL statement to the database with parameters and returns the result
 * @param sqlStatement a string containing the SQL statement
 * @param params an array containing the parameters for the prepared statement
 * @returns an object with rows and query information
 */
export async function query(sqlStatement: string, params: any[] = []): Promise<{ rows: any[], rowCount: number | null, command: string }> {
  const client = await pool.connect();
  try {
    const response = await client.query(sqlStatement, params);
    return {
      rows: response.rows,
      rowCount: response.rowCount,
      command: response.command,
    };
  } catch (error) {
    console.error("Database query error:", error);
    throw error;
  } finally {
    client.release();
  }
}

