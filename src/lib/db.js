import { Pool } from "pg";
import bcrypt from "bcryptjs";

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
  ssl: { rejectUnauthorized: false },
});

async function ensureUsersTableAndSuperadmin() {
  // Verifica si la tabla existe
  const tableRes = await pool.query(`
    SELECT EXISTS (
      SELECT FROM information_schema.tables 
      WHERE table_name = 'users'
    ) as exists;
  `);
  if (!tableRes.rows[0].exists) {
    // Crea la tabla
    await pool.query(`
      CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
  }
  // Verifica si existe el superadmin
  const adminRes = await pool.query("SELECT * FROM users WHERE email = $1", ["admin"]);
  if (adminRes.rows.length === 0) {
    const hashed = await bcrypt.hash("admin123", 10);
    await pool.query("INSERT INTO users (email, password) VALUES ($1, $2)", ["admin", hashed]);
  }
}

ensureUsersTableAndSuperadmin();

export default pool;
