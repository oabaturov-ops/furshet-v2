import type { Metadata } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}