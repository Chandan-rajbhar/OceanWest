import heroPearAi from '../assets/hero-pear-ai.jpg';
import heroSalmonAi from '../assets/hero-salmon-ai.jpg';
import heroBeefAi from '../assets/hero-beef-ai.jpg';
import heroTacosAi from '../assets/hero-tacos-ai.jpg';
import heroHalibutAi from '../assets/hero-halibut-ai.jpg';

// 5 Curated authentic AI-generated dishes perfectly proportioned to fill the hero card
export const HERO_SLIDES = [
  {
    id: 1,
    image: heroPearAi,
    title: "Bosc Pear with Gorgonzola & Thyme-Infused Honey",
    course: "Executive Chef's Signature First Course • Pacific Northwest Harvest",
    alt: "Roasted Bosc Pear with Gorgonzola, Candied Walnuts, and Thyme-Infused Honey"
  },
  {
    id: 2,
    image: heroSalmonAi,
    title: "Wild Pacific Salmon with Citrus Herb Glaze",
    course: "Artisanal Main • Haida Gwaii Wild Catch & Fine Herbs",
    alt: "Pan-Seared Wild Pacific Salmon with Citrus Glaze and Braised Asparagus"
  },
  {
    id: 3,
    image: heroBeefAi,
    title: "Prime Angus Beef Medallions & Truffle Demi",
    course: "Artisanal Main • Slow-Roasted Alberta AAA Tenderloin",
    alt: "Prime Angus Beef Tenderloin Medallion with Black Garlic and Truffle Demi-Glace"
  },
  {
    id: 4,
    image: heroTacosAi,
    title: "Pacific Coast Street Canapés & Artisan Tacos",
    course: "Passed Cocktail Canapés • Late-Night Feature",
    alt: "Artisan Spot Prawn Tacos and Fresh Mango Salsa Canapés"
  },
  {
    id: 5,
    image: heroHalibutAi,
    title: "Pan-Seared Pacific Halibut & Golden Glaze",
    course: "Chef's Feature • Wild Harvest British Columbia",
    alt: "Pan-Seared Pacific Halibut with Saffron Citrus Glaze and Summer Vegetables"
  }
];

export const IMAGES = {
  wedding: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=80",
  filmCraft: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=80",
  gala: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80",
  platter: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=800&q=80"
};

export const MENU_COURSES = [
  {
    id: 1,
    title: "Roasted Anjou Pear with Gorgonzola",
    category: "starters",
    badges: [
      { text: "VEGETARIAN", type: "green" },
      { text: "HAIDA GWAII ORIGIN", type: "tan" }
    ],
    description: "Poached pear roasted in local lavender honey and Okanagan red wine reduction, served with whipped gorgonzola cream, candied pecans, and watercress.",
    serviceStyle: "Plated Dinner & Buffet"
  },
  {
    id: 2,
    title: "Wild Pacific Salmon with Citrus Herb Glaze",
    category: "mains",
    badges: [
      { text: "PACIFIC OCEAN SEAFOOD", type: "blue" },
      { text: "GLUTEN-FREE", type: "green" }
    ],
    description: "Pan-seared wild BC salmon glazed with blood orange and tarragon reduction, over parsnip purée with butter-braised asparagus.",
    serviceStyle: "Plated Dinner & Buffet"
  },
  {
    id: 3,
    title: "Prime Angus Beef Medallions & Truffle Demi",
    category: "mains",
    badges: [
      { text: "ALBERTA AAA BEEF", type: "tan" },
      { text: "GLUTEN-FREE", type: "green" }
    ],
    description: "Slow-roasted tenderloin with black garlic crust, served over pomme purée with morel mushroom sauce and roasted heritage carrots.",
    serviceStyle: "Plated Dinner Course"
  },
  {
    id: 4,
    title: "Pacific Coast Artisanal Grazing Board",
    category: "grazing",
    badges: [
      { text: "GRAZING TABLE", type: "tan" },
      { text: "VEGETARIAN & CHARCUTERIE OPTIONS", type: "green" }
    ],
    description: "Smoked trout mousse, Salt Spring Island goat cheese, cured salumi, pickled samphire, Vancouver Island honeycomb, and organic artisan breads.",
    serviceStyle: "Grazing Table / Platter"
  },
  {
    id: 5,
    title: "Charred Spot Prawn & Mango Skewers",
    category: "canapes",
    badges: [
      { text: "CANAPÉS", type: "blue" },
      { text: "LOCALLY CAUGHT SPOT PRAWN", type: "tan" }
    ],
    description: "Spot prawns glazed with kaffir lime, chili, and cilantro reduction, served with sweet mango salsa and coconut cream dipping sauce.",
    serviceStyle: "Passed Cocktail Canapé"
  },
  {
    id: 6,
    title: "Caramelized Tahitian Vanilla Bean Brûlée",
    category: "desserts",
    badges: [
      { text: "PLATED DESSERT", type: "tan" },
      { text: "VEGETARIAN", type: "green" }
    ],
    description: "Silky Madagascar custard infused with Tahitian vanilla bean, topped with a crackling caramel shell, served with Cowichan Bay wild blackberries.",
    serviceStyle: "Individual Dessert / Platter"
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    quote: "Chef Michael was a marvel for our 185-guest wedding banquet in South Surrey. The braised beef and wild salmon were talk of dinner for months. The entire team was gracious, impeccably organized, and ridiculously stress-free.",
    name: "Claire & Marcus Tremblay",
    role: "Wedding Clients • South Surrey, BC"
  },
  {
    id: 2,
    quote: "On a 22-day film shoot in Squamish and North Vancouver, Ocean West Catering kept 140 cast and crew energized, happy, and well-fed. Dietary needs were 100% verified. A triumph of precision. Outstanding team.",
    name: "Dave Henderson",
    role: "Production Manager • Paramount Pictures / Vancouver Film Studios"
  },
  {
    id: 3,
    quote: "Our annual corporate gala in Richmond required both strict gluten-free accommodation and fine dining execution. Ocean West delivered seamlessly. The presentation was breathtaking and the service was pristine.",
    name: "Sarah Liu",
    role: "Executive Director • Pacific Rim Tech Summit"
  }
];

