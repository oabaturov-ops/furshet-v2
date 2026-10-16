// Блюда фуршета. Кирпич 8 подключит живую базу — этот список станет страховкой.
export interface Dish {
  name: string;
  description: string;
  price: number;
  image: string;
}

export const DISHES: Dish[] = [
  {
    name: "Фруктовая подача",
    description: "Сезонные фрукты, виноград и ягоды",
    price: 450,
    image: "/images/dishes/fruits.jpg",
  },
  {
    name: "Тарталетки с креветкой и лососем",
    description: "Креветка, слабосолёный лосось, сливочный сыр",
    price: 480,
    image: "/images/dishes/tartlets.jpg",
  },
  {
    name: "Слоёные закуски с оливками",
    description: "Слоёное тесто, оливки, сыр, зелень",
    price: 320,
    image: "/images/dishes/pastry.jpg",
  },
];