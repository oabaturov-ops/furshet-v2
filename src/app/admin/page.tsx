"use client";

import { useState, type FormEvent } from "react";
import { CATEGORIES } from "@/lib/menu";

export default function AdminPage() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("/images/dishes/pastry.jpg");
  const [category, setCategory] = useState("Холодные закуски");
  const [status, setStatus] = useState("");

  async function submit(e: FormEvent) {
    e.preventDefault();
    setStatus("Отправляю...");
    const res = await fetch("/api/dishes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, description, price, image, category }),
    });
    const data = await res.json();
    if (res.ok) {
      setStatus("Готово! Блюдо №" + data.id + " в базе. Обнови главную — карточка на месте.");
      setName("");
      setDescription("");
      setPrice("");
    } else {
      setStatus("Ошибка: " + (data.error ?? "неизвестная"));
    }
  }

  return (
    <main className="mx-auto max-w-xl px-6 py-16">
      <h1 className="font-serif text-3xl">Админ-панель</h1>
      <p className="mt-2 text-sm text-neutral-600">Форма сама пишет INSERT в базу. Кирпич 12.</p>

      <form onSubmit={submit} className="mt-8 space-y-5">
        <div>
          <label className="block text-sm font-medium">Название *</label>
          <input value={name} onChange={(e) => setName(e.target.value)} required
            className="mt-1 w-full rounded-xl border border-neutral-300 px-4 py-2" />
        </div>

        <div>
          <label className="block text-sm font-medium">Описание</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={2}
            className="mt-1 w-full rounded-xl border border-neutral-300 px-4 py-2" />
        </div>

        <div>
          <label className="block text-sm font-medium">Цена, ₽ *</label>
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required
            className="mt-1 w-full rounded-xl border border-neutral-300 px-4 py-2" />
        </div>

        <div>
          <label className="block text-sm font-medium">Фото (путь в public)</label>
          <input value={image} onChange={(e) => setImage(e.target.value)}
            className="mt-1 w-full rounded-xl border border-neutral-300 px-4 py-2" />
        </div>

        <div>
          <label className="block text-sm font-medium">Категория</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)}
            className="mt-1 w-full rounded-xl border border-neutral-300 bg-white px-4 py-2">
            {CATEGORIES.slice(1).map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>

        <button type="submit" className="rounded-full bg-[#e53935] px-6 py-3 text-white transition hover:opacity-90">
          Добавить блюдо
        </button>
      </form>

      {status && <p className="mt-6 font-medium">{status}</p>}
    </main>
  );
}