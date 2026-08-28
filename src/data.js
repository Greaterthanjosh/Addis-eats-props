import doroWotImage from "./assets/doro-wot.jpg";
import tibsImage from "./assets/tibs.jpg";
import shiroImage from "./assets/shiro.jpg";
import kitfoImage from "./assets/kitfo.jpg";

const dishes = [
  {
    id: 1,
    name: "Doro Wot",
    price: 450,
    description: "Spicy Ethiopian chicken stew served with injera",
    image: doroWotImage,
    category: "Main",
    spicy: true,
  },
  {
    id: 2,
    name: "Tibs",
    price: 380,
    description: "Tender pieces of sautéed beef with onions and peppers",
    image: tibsImage,
    category: "Main",
    spicy: true,
  },
  {
    id: 3,
    name: "Shiro",
    price: 250,
    description: "Smooth and flavorful chickpea stew served with injera",
    image: shiroImage,
    category: "Vegetarian",
    spicy: false,
  },
  {
    id: 4,
    name: "Kitfo",
    price: 500,
    description: "Seasoned minced beef served with traditional Ethiopian sides",
    image: kitfoImage,
    category: "Main",
    spicy: false,
  },
];

export default dishes;
