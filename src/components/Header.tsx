"use client";

import Image from "next/image";
import { useState } from "react";

const MENU = [
  { label: "Блюда фуршета", href: "#menu" },
  { label: "Мы с вами", href: "#about" },
  { label: "Как мы работаем", href: "#process" },
  { label: "Контакты", href: "#contacts" },
  { label: "Истории", href: "#stories" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="relative z-50 flex items-center justify-between px-6 py-5 md:px-12">
        <a href="/" className="font-serif text-2xl">
          Фуршет
        </a>

        <div className="flex items-center gap-3">
          <a
            href="#contacts"
            className="hidden rounded-full bg-[#e53935] px-5 py-2 text-sm font-semibold text-white transition hover:opacity-90 sm:inline-block"
          >
            Обсудить событие
          </a>

          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
            className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-white shadow-md transition hover:shadow-lg"
          >
            <span className="relative block h-3.5 w-5">
              <span
                className={`absolute left-0 top-0 h-[2px] w-5 rounded bg-[#1a1a1a] transition-all duration-300 ${
                  open ? "translate-y-[6px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[6px] h-[2px] w-5 rounded bg-[#1a1a1a] transition-all duration-300 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[12px] h-[2px] w-5 rounded bg-[#1a1a1a] transition-all duration-300 ${
                  open ? "-translate-y-[6px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center bg-[#f6f4ef] transition-opacity duration-500 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav className="flex flex-col items-center gap-6 md:gap-8">
          {MENU.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="font-serif text-4xl text-[#1a1a1a] transition hover:text-[#e53935] md:text-6xl"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <p className="mt-12 text-sm text-[#4a4a4a]">
          +7 900 000-00-00 · hello@furshet-perm.ru
        </p>
      </div>
    </>
  );
}