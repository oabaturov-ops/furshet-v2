import Header from "@/components/Header";
export default function Home() {
  return (
    <main className="min-h-screen bg-[#f6f4ef] text-[#1a1a1a]">
      <Header />

      <section className="mx-auto max-w-3xl px-6 pb-24 pt-16 text-center md:pt-28">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#e53935]">
          Кейтеринг в Перми
        </p>
        <h1 className="mt-6 font-serif text-4xl leading-tight md:text-6xl">
          Гастрономия, которую запоминают
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[#4a4a4a] md:text-lg">
          Фуршеты, банкеты и коктейли под ключ: меню собираем под ваше событие,
          подаём красиво, убираем за собой. Вы — гости. Всё остальное — мы.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href="#menu" className="rounded-full bg-[#1a1a1a] px-8 py-3 text-sm font-semibold text-white transition hover:opacity-90">
            Смотреть меню
          </a>
          <a href="#contacts" className="rounded-full border border-[#1a1a1a] px-8 py-3 text-sm font-semibold transition hover:bg-[#1a1a1a] hover:text-white">
            Рассчитать банкет
          </a>
        </div>
      </section>

      <footer id="contacts" className="border-t border-[#e5e0d5] px-6 py-10 text-center md:px-12">
        <p className="font-serif text-xl">Фуршет · Пермь</p>
        <p className="mt-2 text-sm text-[#4a4a4a]">
          +7 900 000-00-00 · hello@furshet-perm.ru
        </p>
        <p className="mt-6 text-xs uppercase tracking-[0.25em] text-[#9a938a]">
          Изготовлен OWS Web Lab
        </p>
      </footer>
    </main>
  );
}