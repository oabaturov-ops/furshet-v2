"use client";

import { useEffect, useState, type FormEvent } from "react";
import { CATEGORIES } from "@/lib/menu";

type Row = {
  id?: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
};

export default function AdminPage() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("Холодные закуски");
  const [status, setStatus] = useState("");
  const [dishes, setDishes] = useState<Row[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);

  async function loadDishes() {
    const res = await fetch("/api/dishes");
    const data = (await res.json()) as Row[];
    setDishes(data);
  }

  useEffect(() => {
    loadDishes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function clearForm() {
    setName("");
    setDescription("");
    setPrice("");
    setImage("");
    setCategory("Холодные закуски");
  }

  function startEdit(d: Row) {
    if (!d.id) return;
    setEditingId(d.id);
    setName(d.name);
    setDescription(d.description);
    setPrice(String(d.price));
    setImage(d.image);
    setCategory(d.category);
    setStatus(`Редактируем: ${d.name}`);
  }

  function cancelEdit() {
    setEditingId(null);
    clearForm();
    setStatus("Редактирование отменено");
  }

  async function submit(e: FormEvent) {
    e.preventDefault();
    const payload = { name, description, price: Number(price), image, category };
    const res = await fetch("/api/dishes", {
      method: editingId ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editingId ? { ...payload, id: editingId } : payload),
    });
    const data = await res.json();
    if (!res.ok) {
      setStatus(`Ошибка: ${data.error}`);
      return;
    }
    setStatus(editingId ? "Изменения сохранены" : "Блюдо добавлено");
    setEditingId(null);
    clearForm();
    loadDishes();
  }

  async function remove(d: Row) {
    if (!d.id) return;
    const sure = confirm(`Удалить «${d.name}»? Обратно его не вернуть.`);
    if (!sure) return;
    const res = await fetch(`/api/dishes?id=${d.id}`, { method: "DELETE" });
    const data = await res.json();
    if (!res.ok) {
      setStatus(`Ошибка: ${data.error}`);
      return;
    }
    if (editingId === d.id) {
      setEditingId(null);
      clearForm();
    }
    setStatus(`Удалено: ${d.name}`);
    loadDishes();
  }

  return (
    <main className="mx-auto max-w-2xl p-6">
      <h1 className="text-2xl font-bold">Админка фуршета</h1>
      <p className="mb-4 text-sm text-gray-500">
        {editingId
          ? `Режим редактирования: блюдо №${editingId}. «Отмена» вернёт форму в режим добавления.`
          : "Под формой видно все блюда — их можно править и удалять."}
      </p>

      <form onSubmit={submit} className="mb-8 space-y-3 rounded-xl border p-4">
        <h2 className="font-semibold">{editingId ? "Сохранить правки" : "Добавить блюдо"}</h2>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Название" className="w-full rounded border p-2" />
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Описание" rows={3} className="w-full rounded border p-2" />
        <input value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Цена, ₽" type="number" className="w-full rounded border p-2" />
        <input value={image} onChange={(e) => setImage(e.target.value)} placeholder="Путь к фото: /images/dishes/kanape.jpg" className="w-full rounded border p-2" />
        <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full rounded border p-2">
          {CATEGORIES.slice(1).map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        <div className="flex gap-2">
          <button type="submit" className="rounded bg-black px-4 py-2 text-white">
            {editingId ? "Сохранить изменения" : "Добавить"}
          </button>
          {editingId && (
            <button type="button" onClick={cancelEdit} className="rounded border px-4 py-2">
              Отмена
            </button>
          )}
        </div>
        {status && <p className="text-sm text-gray-600">{status}</p>}
      </form>

      <h2 className="mb-2 font-semibold">Все блюда ({dishes.length})</h2>
      <ul className="space-y-2">
        {dishes.map((d) => (
          <li key={d.id ?? d.name} className="flex items-center gap-3 rounded-xl border p-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={d.image} alt={d.name} className="h-12 w-12 shrink-0 rounded object-cover" />
            <div className="min-w-0 flex-1">
              <p className="truncate font-medium">{d.name}</p>
              <p className="text-sm text-gray-500">
                {d.category} · {d.price} ₽ {d.id ? `· №${d.id}` : ""}
              </p>
              <p className="truncate font-mono text-xs text-gray-400">{d.image}</p>
            </div>
            {d.id ? (
              <div className="flex shrink-0 gap-2">
                <button type="button" onClick={() => startEdit(d)} className="rounded border px-3 py-1 text-sm hover:bg-gray-100">
                  Редактировать
                </button>
                <button type="button" onClick={() => remove(d)} className="rounded border border-red-300 px-3 py-1 text-sm text-red-600 hover:bg-red-50">
                  Удалить
                </button>
              </div>
            ) : null}
          </li>
        ))}
      </ul>
    </main>
  );
}