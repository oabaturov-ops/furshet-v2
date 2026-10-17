import { Pool } from "pg";
import { DISHES } from "@/lib/menu";

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

export async function GET() {
  try {
    const result = await pool.query(
      "SELECT name, description, price, image, category FROM dishes ORDER BY id"
    );
    return Response.json(result.rows);
  } catch {
    return Response.json(DISHES);
  }
}