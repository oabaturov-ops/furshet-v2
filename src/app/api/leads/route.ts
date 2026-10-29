import { Pool } from "pg";

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = (body.name ?? "").trim();
    const phone = (body.phone ?? "").trim();
    const comment = (body.comment ?? "").trim();

    if (name.length < 2 || phone.length < 6) {
      return Response.json({ error: "Укажите имя и телефон" }, { status: 400 });
    }

    await pool.query(
      "INSERT INTO leads (name, phone, comment) VALUES ($1, $2, $3)",
      [name, phone, comment]
    );

    return Response.json({ ok: true });
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Ошибка сервера" }, { status: 500 });
  }
}