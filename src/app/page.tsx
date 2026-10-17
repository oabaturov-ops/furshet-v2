import Image from "next/image";
import Header from "@/components/Header";
import { DISHES } from "@/lib/menu";
import Menu from "@/components/Menu";
export default function Home() {
  return (
   
       
   <main className="min-h-screen bg-[#f6f4ef] text-[#1a1a1a]">
      <Header />

<section className="relative">
        <div className="grid h-screen grid-cols-2">
          <div className="relative">
            <Image
              src="/images/top-left.jpg"
              alt="Банкетный зал со свечами и цветами"
              fill
              priority
              sizes="50vw"
              className="object-cover transition duration-500 hover:brightness-75"
            />
          </div>
          <div className="relative">
            <Image
              src="/images/top-right.jpg"
              alt="Элегантная сервировка стола"
              fill
              sizes="50vw"
              className="object-cover transition duration-500 hover:brightness-75"
            />
          </div>
        </div>
        <div className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#f6f4ef] shadow-lg md:h-36 md:w-36">
          <span className="font-serif text-5xl md:text-7xl">А</span>
        </div>
      </section>

            <section className="mx-auto grid max-w-6xl items-center gap-10 px-6 pb-24 pt-10 md:grid-cols-2 md:gap-14 md:pt-20">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#e53935]">
            Кейтеринг в Перми
          </p>
          <h1 className="mt-6 font-serif text-4xl leading-tight md:text-5xl lg:text-6xl">
            Гастрономия, которую запоминают
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-[#4a4a4a] md:text-lg">
            Фуршеты, банкеты и коктейли под ключ: меню собираем под ваше
            событие, подаём красиво, убираем за собой. Вы — гости. Всё
            остальное — мы.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="#menu" className="rounded-full bg-[#1a1a1a] px-8 py-3 text-center text-sm font-semibold text-white transition hover:opacity-90">
              Смотреть меню
            </a>
            <a href="#contacts" className="rounded-full border border-[#1a1a1a] px-8 py-3 text-center text-sm font-semibold transition hover:bg-[#1a1a1a] hover:text-white">
              Рассчитать банкет
            </a>
          </div>
        </div>

        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-xl">
          <Image
            src="/images/hero.jpg"
            alt="Сервированный стол для фуршета"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition duration-500 hover:brightness-75"
          />
        </div>
      </section>

      

      <section className="mx-auto max-w-3xl px-6 py-20 text-center md:py-28">
        <p className="font-serif text-2xl leading-snug md:text-4xl">
          Фуршет — кейтеринговая компания из Перми, специализирующаяся на
          выездных фуршетах, банкетах и коктейлях премиального уровня. Мы
          известны безупречной едой, напитками и сервисом на каждом событии —
          от первого бокала до последнего гостя.
        </p>
      </section>

  <Menu />

          <footer id="contacts" className="border-t border-[#e5e0d5] px-6 py-10 text-center md:px-12">
        <p className="font-serif text-xl">Фуршет · Пермь</p>
        <p className="mt-2 text-sm text-[#4a4a4a]">
          +7 900 000-00-00 · hello@furshet-perm.ru
        </p>
        <p className="mt-6 text-xs uppercase tracking-[0.25em] text-[#9a938a]">
          Создан <a href="https://olegwebsolutions.ru" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-[#e53935] transition-colors hover:text-[#e53935]">студия OWS Web Lab</a>
        </p>
      </footer>
    </main>
  );
}