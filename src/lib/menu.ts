// Блюда фуршета. Кирпич 10 подключит живую базу — этот список станет страховкой.
export interface Dish {
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export const CATEGORIES = [
  "Все",
  "Холодные закуски",
  "Горячие закуски",
  "Десерты",
  "Канапе",
  "Салаты",
  "Набор из блинов",
  "Профитроли",
  "Рулетики",
  "Сытные закуски",
  "Фруктовые и овощные сеты",
  "Кростини и брускеты",
];

export const DISHES: Dish[] = [
  {
    name: "Фруктовая подача",
    description: "Сезонные фрукты, виноград и ягоды",
    price: 450,
    image: "/images/dishes/fruits.jpg",
    category: "Десерты",
  },
  {
    name: "Тарталетки с креветкой и лососем",
    description: "Креветка, слабосолёный лосось, сливочный сыр",
    price: 480,
    image: "/images/dishes/tartlets.jpg",
    category: "Холодные закуски",
  },
  {
    name: "Слоёные закуски с оливками",
    description: "Слоёное тесто, оливки, сыр, зелень",
    price: 320,
    image: "/images/dishes/pastry.jpg",
    category: "Горячие закуски",
  },
];