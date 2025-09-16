import pool from "../../lib/db";
import bcrypt from "bcryptjs";

export async function POST(req) {
  const { email, password } = await req.json();
  if (!email || !password) {
    return new Response(JSON.stringify({ error: "Faltan datos" }), { status: 400 });
  }
  const hashed = await bcrypt.hash(password, 10);
  try {
    await pool.query("INSERT INTO users (email, password) VALUES ($1, $2)", [email, hashed]);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Usuario ya existe o error de DB" }), { status: 500 });
  }
}
