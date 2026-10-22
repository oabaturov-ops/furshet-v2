import type { Metadata } from "next";
import Menu from "@/components/Menu";

export const metadata: Metadata = {
  title: "Блюда фуршета — Фуршет Пермь",
  description:
    "Канапе, тарталетки, горячее и десерты. Собираем меню под ваше событие.",
};

export default function MenuPage() {
  return (
    <main>
      <h1 className="sr-only">Блюда фуршета</h1>
      <Menu />
    </main>
  );
}