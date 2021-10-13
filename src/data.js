import AdidasShoes from "./images/AdidasShoes.png";
import DressShoesOne from "./images/DressShoesOne.png";
import DressShoesTwo from "./images/DressShoesTwo.png";
import DressShoesThree from "./images/DressShoesThree.png";
import HikingBoots from "./images/HikingBoots.png";
import NikeShoesOne from "./images/NIkeShoesOne.png";
import NikeShoesTwo from "./images/NikeShoesTwo.png";
import WomensBoot from "./images/WomensBoot.png"

export const categories = [
    {
      id: 1,
      img: "https://images.asos-media.com/products/asos-design-oxford-schoenen-van-lichtbruin-leer-met-teenstuk/22667836-1-tan?$n_320w$&wid=317&fit=constrain",
      title: "Smart Shoes",
      category: "smart"
    },
    {
      id: 2,
      img: "https://images.asos-media.com/products/asos-design-sneakers-met-dikke-zool-in-stone/22883181-1-stone?$n_320w$&wid=317&fit=constrain",
      title: "Latest Sneakers",
      category: "sneakers"
    },
    {
      id: 3,
      img: "https://images.asos-media.com/products/dr-martens-sinclair-leren-laarzen-met-plateauzool-en-rits-in-zwart/11838292-1-tumbledblack?$n_320w$&wid=317&fit=constrain",
      title: "Boots",
      category: "boots"
    },
  ];

  

  export const popularProducts = [
    {
      id:1,
      name: "Adidas Superstars",
      category: "Men's sneakers",
      img: AdidasShoes,
      description: "Originally made for basketball courts in the '70s. Celebrated by hip hop royalty in the '80s. The adidas Superstar shoe is now a lifestyle staple for streetwear enthusiasts. The world-famous shell toe feature remains, providing style and protection. Just like it did on the B-ball courts back in the day.",
      size: [38,39,40,41,42,43,44,45,46],
      price: 80,
    },
    {
      id:2,
      img: DressShoesOne,
    },
    {
      id:3,
      img: DressShoesTwo,
    },
    {
      id:4,
      img: DressShoesThree,
    },
    {
      id:5,
      img: HikingBoots,
    },
    {
      id:6,
      img: NikeShoesOne ,
    },
    {
      id:7,
      img: NikeShoesTwo,
    },
    {
      id:8,
      name: "Women's Marina Boots",
      category: "Women's boots",
      img: WomensBoot,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      size: [38,39,40,41,42,43,44,45,46],
      price: 100,
    },
  ]