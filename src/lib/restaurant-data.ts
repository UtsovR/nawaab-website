export type MenuItem = {
  name: string;
  price: number;
};

export type MenuSubcategory = {
  title: string;
  items: MenuItem[];
};

export type MenuSection = {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  subcategories: MenuSubcategory[];
};

const items = (entries: [string, number][]): MenuItem[] =>
  entries.map(([name, price]) => ({ name, price }));

export const menuSections: MenuSection[] = [
  {
    id: "biryani",
    eyebrow: "Our Signature",
    title: "NAWAAB Special Biryani",
    intro: "Biryani comes first — because it is at the heart of the NAWAAB menu.",
    subcategories: [
      {
        title: "Biryani",
        items: items([
          ["Mutton Biryani", 379],
          ["Chicken Biryani", 279],
          ["Veg Biryani", 199],
          ["Special Mutton Biriyani", 699],
          ["Special Chicken Biriyani", 499],
        ]),
      },
    ],
  },
  {
    id: "nawaab-side-dish",
    eyebrow: "NAWAAB Favourites",
    title: "NAWAAB Side Dish",
    subcategories: [
      {
        title: "Side Dish",
        items: items([
          ["Chicken Chap", 219],
          ["Chicken Rezala", 239],
          ["Mutton Rezala", 389],
          ["Mutton Liver Fry", 289],
          ["Mutton Keema Fry", 249],
        ]),
      },
    ],
  },
  {
    id: "soups-salads-openers",
    eyebrow: "To Begin",
    title: "Soups, Salads & Openers",
    subcategories: [
      {
        title: "Soup",
        items: items([
          ["Chicken Clear Soup", 149],
          ["Chicken Manchow Soup", 179],
          ["Sweet Corn Soup", 149],
          ["Tomato Soup", 149],
          ["Lemon Coriander Soup", 149],
          ["Hot & Sour Soup", 159],
        ]),
      },
      {
        title: "Salad",
        items: items([
          ["Green Salad", 70],
          ["Mixed Raita", 80],
        ]),
      },
    ],
  },
  {
    id: "starters",
    eyebrow: "To Share",
    title: "Veg & Non-Veg Starters",
    subcategories: [
      {
        title: "Starter — Veg",
        items: items([
          ["Peri Peri French Fries", 149],
          ["Crispy Chilli Babycorn", 199],
          ["Achari Paneer", 269],
          ["Paneer Shashlik", 269],
          ["Garlic Mushroom", 219],
          ["Pan Fried Chilli Paneer", 219],
          ["Dragon Paneer", 219],
        ]),
      },
      {
        title: "Starter — Non-Veg — Chicken",
        items: items([
          ["Kung Pao Chicken", 289],
          ["Chicken 65", 299],
          ["Dragon Chicken", 299],
          ["Chicken Lollipop", 289],
          ["Garlic Chicken", 289],
        ]),
      },
      {
        title: "Starter — Non-Veg — Fish",
        items: items([
          ["Nawaab Special Fish Fry", 499],
          ["Fish Finger", 299],
          ["Diamond Fish Fry", 269],
          ["Fish & Chips", 499],
          ["Fish Kabiraji", 269],
          ["Garlic Fish", 399],
          ["Honey Garlic Fish", 425],
          ["Tawa Fish", 325],
          ["Golden Fried Prawn", 499],
          ["Pan Fried Fish", 365],
        ]),
      },
    ],
  },
  {
    id: "tandoor",
    eyebrow: "From The Fire",
    title: "From the Tandoor",
    subcategories: [
      {
        title: "Tandoor — Veg",
        items: items([
          ["Paneer Tikka Kebab", 249],
          ["Paneer Malai Kebab", 259],
          ["Stuffed Malai Mushroom", 279],
          ["Mushroom Tikka", 299],
        ]),
      },
      {
        title: "Tandoor — Fish",
        items: items([
          ["Fish Tandoori", 349],
          ["Tandoori Garlic Prawn", 379],
          ["Tandoori Prawn", 359],
          ["Pomfret (Half)", 289],
          ["Pomfret (Full)", 549],
        ]),
      },
      {
        title: "Tandoor — Chicken / Mutton",
        items: items([
          ["Chicken Reshmi Kebab", 319],
          ["Chicken Malai Kebab", 329],
          ["Chicken Tikka Kebab", 319],
          ["Chicken Methi Malai Kebab", 329],
          ["Chicken Hariyali Kebab", 339],
          ["Chicken Tangdi Kebab (4 PCS)", 349],
          ["Chicken Tandoori (Half)", 319],
          ["Chicken Tandoori (Full)", 599],
          ["Chicken Achari Kebab", 325],
          ["Stuffed Afghani Chicken (Half)", 379],
          ["Stuffed Afghani Chicken (Full)", 699],
        ]),
      },
    ],
  },
  {
    id: "indian-veg",
    eyebrow: "Royal Classics",
    title: "Indian Main Course — Vegetarian",
    subcategories: [
      {
        title: "Indian Side Dishes — Veg",
        items: items([
          ["Dal Makhani", 259],
          ["Kaali Dal", 279],
          ["Dal Fry", 259],
          ["Dal Tadka", 259],
          ["Lasooni Dal Fry", 279],
          ["Nawaab Special Dal", 319],
          ["Kadai Paneer", 329],
          ["Mattar Paneer", 319],
          ["Palak Paneer", 349],
          ["Corn Palak Paneer", 359],
          ["Malai Paneer", 369],
          ["Shahi Paneer", 379],
          ["Paneer Butter Masala", 329],
          ["Paneer Korma", 329],
          ["Paneer Do Pyaza", 359],
          ["Corn Palak Mushroom", 399],
          ["Palak Mushroom", 359],
          ["Aloo Do Pyaza", 209],
          ["Kashmiri Aloo Dum", 229],
          ["Methi Malai Aloo Dum", 239],
          ["Navratan Korma", 299],
          ["Mixed Veg", 299],
        ]),
      },
    ],
  },
  {
    id: "indian-non-veg",
    eyebrow: "Royal Classics",
    title: "Indian Main Course — Non-Vegetarian",
    subcategories: [
      {
        title: "Indian Side Dishes — Chicken Items",
        items: items([
          ["Butter Chicken", 349],
          ["Kadai Chicken", 349],
          ["Chicken Korma", 369],
          ["Chicken Do Pyaza", 349],
          ["Chicken Masala", 329],
          ["Chicken Tikka Masala", 349],
          ["Handi Chicken", 369],
          ["Chicken Dak Bungalow", 379],
          ["Coriander Chicken", 389],
          ["Chicken Lababdar", 399],
          ["Reshmi Chicken Butter Masala", 379],
          ["Chicken Bharta", 349],
        ]),
      },
      {
        title: "Indian Side Dishes — Mutton Items",
        items: items([
          ["Mutton Kassa", 429],
          ["Mutton Dak Bungalow", 449],
          ["Handi Mutton", 439],
          ["Mutton Do Pyaza", 439],
          ["Mutton Rogan Josh", 439],
        ]),
      },
      {
        title: "Indian Side Dishes — Fish Items",
        items: items([["Fish Tawa Masala (4 PCS)", 329]]),
      },
    ],
  },
  {
    id: "breads-rice",
    eyebrow: "The Perfect Accompaniment",
    title: "Breads & Rice",
    subcategories: [
      {
        title: "Bread Section",
        items: items([
          ["Tandoori Roti", 39],
          ["Garlic Naan", 69],
          ["Chesse Naan", 99],
          ["Keema Naan", 129],
          ["Laccha Paratha", 59],
          ["Butter Tandoori Roti", 49],
          ["Masala Kulcha", 79],
        ]),
      },
      {
        title: "Rice Section",
        items: items([
          ["Egg Rice", 219],
          ["Prawn Rice", 319],
          ["Chicken Rice", 309],
          ["Chicken Schezwan Rice", 329],
          ["Schezwan Fried Rice (Veg)", 309],
          ["Mixed Rice", 349],
          ["Basanti Pulao", 259],
          ["Steamed Rice", 99],
          ["Jeera Rice", 149],
          ["Veg Pulao", 249],
        ]),
      },
    ],
  },
  {
    id: "chinese-oriental",
    eyebrow: "Wok Fired",
    title: "Chinese & Oriental",
    subcategories: [
      {
        title: "Noodles",
        items: items([
          ["Egg Noodles", 229],
          ["Egg Schezwan Noodles", 249],
          ["Chicken Schezwan Noodles", 299],
          ["Chicken Noodles (Hakka)", 269],
          ["Mixed Noodles", 350],
          ["Veg Noodles (Gravy)", 220],
          ["Egg Noodles (Gravy)", 249],
          ["Chicken Noodles (Gravy)", 279],
          ["Pan Fried Noodles (Veg)", 280],
          ["Pan Fried Noodles (Non Veg)", 339],
        ]),
      },
    ],
  },
  {
    id: "chinese-veg",
    eyebrow: "Wok Fired",
    title: "Chinese Side Dishes — Veg",
    subcategories: [
      {
        title: "Veg",
        items: items([
          ["Chilli Paneer (Gravy)", 289],
          ["Garlic Paneer (Gravy)", 315],
          ["Chilli Mushroom (Gravy)", 315],
          ["Veg Manchurian (Gravy)", 289],
          ["Schezwan Chilli Paneer (Gravy)", 315],
          ["Chilli Mushroom (Dry)", 289],
          ["Hot Garlic Paneer (Dry)", 279],
          ["Schezwan Mushroom (Dry)", 319],
        ]),
      },
    ],
  },
  {
    id: "chinese-non-veg",
    eyebrow: "Wok Fired",
    title: "Chinese Side Dishes — Non-Veg",
    subcategories: [
      {
        title: "Non-Veg",
        items: items([
          ["Chilli Chicken", 329],
          ["Hot Garlic Chicken", 379],
          ["Schezwan Chicken", 369],
          ["Schezwan Chilli Fish", 359],
          ["Hot Garlic Fish", 359],
          ["Chilli Fish", 329],
          ["Schezwan Prawn", 379],
          ["Chilli Prawn", 379],
          ["Hot Garlic Prawn", 389],
          ["Dry Chilli Prawn", 359],
        ]),
      },
    ],
  },
  {
    id: "beverages-dessert",
    eyebrow: "A Royal Finish",
    title: "Beverages & Dessert",
    subcategories: [
      {
        title: "Mocktails",
        items: items([
          ["Virgin Mojito", 170],
          ["Orange Mojito", 175],
          ["Cucumber Mojito", 175],
          ["Watermelon Mojito", 175],
          ["Spice of Blast", 180],
          ["Virgin Coconut Mojito", 225],
          ["Blue Lagoon", 140],
          ["Litchi Cinderella", 175],
          ["Virgin Mary", 185],
          ["Lemongrass Cooler", 165],
          ["Orange Martini (Virgin)", 175],
          ["Fresh Lime Soda", 99],
          ["Masala Cold Drink", 99],
        ]),
      },
      {
        title: "Dessert",
        items: items([
          ["Mango Mousse", 130],
          ["Chocolate Mousse", 140],
          ["Nolen Gur Mousse", 155],
          ["Butterscotch Mousse", 140],
          ["Brownie with Vanilla Ice Cream", 225],
          ["Tooty Fruity", 210],
          ["Phirni", 130],
          ["Shahi Tukda", 155],
          ["Tender Coconut (Pabrai’s)", 199],
          ["Nolen Gur", 209],
        ]),
      },
      {
        title: "Assorted Beverages",
        items: items([
          ["Thums Up", 50],
          ["Sprite", 50],
        ]),
      },
      { title: "Beverages", items: items([["Packaged Drinking Water", 20]]) },
    ],
  },
];

export const menuNavigation = [
  ["Biryani", "biryani"],
  ["Soups & Starters", "soups-salads-openers"],
  ["Tandoor", "tandoor"],
  ["Indian Veg", "indian-veg"],
  ["Indian Non-Veg", "indian-non-veg"],
  ["Breads & Rice", "breads-rice"],
  ["Chinese", "chinese-oriental"],
  ["Beverages", "beverages-dessert"],
  ["Desserts", "beverages-dessert"],
] as const;
