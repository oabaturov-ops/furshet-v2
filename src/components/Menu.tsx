"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { DISHES, CATEGORIES } from "@/lib/menu";

export default function Menu() {
  const [cat, setCat] = useState("Все");

    const [allDishes, setAllDishes] = useState(DISHES);

  useEffect(() => {
    fetch("/api/dishes")
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) setAllDishes(data);
      })
      .catch(() => {});
  }, []);

  const dishes = cat === "Все" ? allDishes : allDishes.filter((d) => d.category === cat);

  return (
    <section id="menu" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <p className="text-center text-sm uppercase tracking-widest text-[#e53935]">Меню</p>
      <h2 className="mt-3 text-center font-serif text-3xl md:text-5xl">Блюда фуршета</h2>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={`rounded-full border px-5 py-2 text-sm transition ${
              cat === c
                ? "border-[#e53935] bg-[#e53935] text-white"
                : "border-neutral-300 text-neutral-600 hover:border-[#e53935] hover:text-[#e53935]"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {dishes.map((dish) => (
          <div key={dish.name} className="group">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src={dish.image}
                alt={dish.name}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="mt-5 font-serif text-xl md:text-2xl">{dish.name}</h3>
            <p className="mt-2 text-sm text-neutral-600">{dish.description}</p>
            <p className="mt-3 font-semibold">{dish.price} ₽</p>
          </div>
        ))}
      </div>
    </section>
  );
}