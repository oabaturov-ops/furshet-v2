import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Как мы работаем — Фуршет Пермь",
  description: "От заявки до подачи: как мы организуем фуршет в Перми.",
};

const STEPS = [
  {
    title: "Знакомимся",
    text: "Вы оставляете заявку, мы перезваниваем и обсуждаем событие: дата, число гостей, бюджет.",
  },
  {
    title: "Собираем меню",
    text: "Подбираем блюда под ваш повод, считаем смету и вносим правки, пока всё не устроит.",
  },
  {
    title: "Готовим",
    text: "В день события готовим из свежих продуктов и бережно упаковываем для доставки.",
  },
  {
    title: "Подаём",
    text: "Привозим и сервируем подачу, остаёмся на связи до конца праздника.",
  },
];

export default function ProcessPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="font-serif text-6xl md:text-5xl">Как мы работаем</h1>
      <p className="mt-6 text-xl">
        Небольшой фуршет или большое торжество — схема работы одна. Вот что будет после вашей заявки.
      </p>
      <div className="mt-12 space-y-10">
        {STEPS.map((step, i) => (
          <div key={step.title}>
            <h2 className="font-serif text-3xl md:text-4xl">
              {i + 1}. {step.title}
            </h2>
            <p className="mt-2 text-xl">{step.text}</p>
          </div>
        ))}
      </div>
    </main>
  );
}