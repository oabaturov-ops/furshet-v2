import { Pool } from "pg";
import { DISHES } from "@/lib/menu";

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

export async function GET() {
  try {
    const result = await pool.query(
      "SELECT id, name, description, price, image, category FROM dishes ORDER BY id"
    );
    return Response.json(result.rows);
  } catch {
    return Response.json(DISHES);
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = String(body.name ?? "").trim();
    const description = String(body.description ?? "").trim();
    const price = Math.round(Number(body.price));
    const image = String(body.image ?? "").trim().replace(/\\/g, "/") || "/images/dishes/pastry.jpg";
    const category = String(body.category ?? "").trim() || "Холодные закуски";
    if (!name || !Number.isFinite(price)) {
      return Response.json({ error: "Нужны название и цена числом" }, { status: 400 });
    }
    const result = await pool.query(
      "INSERT INTO dishes (name, description, price, image, category) VALUES ($1, $2, $3, $4, $5) RETURNING id",
      [name, description, price, image, category]
    );
    return Response.json({ ok: true, id: result.rows[0].id });
  } catch {
    return Response.json({ error: "Ошибка сервера" }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const id = Number(body.id);
    if (!Number.isInteger(id) || id <= 0) {
      return Response.json({ error: "Не указан номер блюда (id)" }, { status: 400 });
    }
    const name = String(body.name ?? "").trim();
    const description = String(body.description ?? "").trim();
    const price = Math.round(Number(body.price));
    const image = String(body.image ?? "").trim().replace(/\\/g, "/") || "/images/dishes/pastry.jpg";
    const category = String(body.category ?? "").trim() || "Холодные закуски";
    if (!name || !Number.isFinite(price)) {
      return Response.json({ error: "Нужны название и цена числом" }, { status: 400 });
    }
    const result = await pool.query(
      "UPDATE dishes SET name = $1, description = $2, price = $3, image = $4, category = $5 WHERE id = $6",
      [name, description, price, image, category, id]
    );
    if (result.rowCount === 0) {
      return Response.json({ error: "Блюдо с таким id не найдено" }, { status: 404 });
    }
    return Response.json({ ok: true });
  } catch {
    return Response.json({ error: "Ошибка сервера" }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const id = Number(new URL(request.url).searchParams.get("id"));
    if (!Number.isInteger(id) || id <= 0) {
      return Response.json({ error: "Не указан id в адресе (?id=3)" }, { status: 400 });
    }
    const result = await pool.query("DELETE FROM dishes WHERE id = $1", [id]);
    if (result.rowCount === 0) {
      return Response.json({ error: "Блюдо с таким id не найдено" }, { status: 404 });
    }
    return Response.json({ ok: true });
  } catch {
    return Response.json({ error: "Ошибка сервера" }, { status: 500 });
  }
}