import type { Metadata } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const playfair = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  variable: "--font-playfair",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Фуршет — кейтеринг в Перми",
  description:
    "Фуршеты, банкеты и коктейли под ключ в Перми. Меню собираем под ваше событие, подаём красиво, убираем за собой. Вы — гости. Всё остальное — мы.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${playfair.variable} ${manrope.variable} antialiased`}>
        <Header />
        {children}

        {/* ПОДВАЛ (ФУТЕР) — общий для всех страниц */}
        <footer
          id="contacts"
          className="border-t border-[#e5e0d5] px-6 py-10 text-center md:px-12"
        >
          <p className="font-serif text-xl">Фуршет · Пермь</p>
          <p className="mt-2 text-sm text-[#4a4a4a]">
            +7 900 000-00-00 · hello@furshet-perm.ru
          </p>
          <div className="text-center text-sm text-muted-foreground">
            © 2026 Фуршет Пермь. Все права защищены.
          </div>
          <p className="mt-6 text-xs uppercase tracking-[0.25em] text-[#9a938a]">
            Создано{" "}
            <a
              href="https://www.olegwebsolutions.ru/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 decoration-[#e53935] transition-colors hover:text-[#e53935]"
            >
              студией OWS Web Lab
            </a>
          </p>
        </footer>
      </body>
    </html>
  );
}