import { Key } from "react";
import DirectoryItem from "../directory-item/directory-item";

import { DirectoryContainer } from './directory.styles';

export type DirectoryCategory = {
  id: Key;
  title: string;
  imageUrl: string;
  route: string;
};

const categories: DirectoryCategory[] = [
  {
    id: 1,
    title: "Hats",
    imageUrl: process.env.PUBLIC_URL + "/images/home-img/hat.PNG",
    route: "shop/hats"
  },
  {
    id: 2,
    title: "Coats",
    imageUrl: process.env.PUBLIC_URL + "/images/home-img/coats.PNG",
    route: "shop/coats"
  },
  {
    id: 3,
    title: "Shoes",
    imageUrl: process.env.PUBLIC_URL + "/images/home-img/shoes.PNG",
    route: "shop/shoes"
  },
  {
    id: 4,
    title: "Womens",
    imageUrl: process.env.PUBLIC_URL + "/images/home-img/women.PNG",
    route: "shop/womens"
  },
  {
    id: 5,
    title: "Mens",
    imageUrl: process.env.PUBLIC_URL + "/images/home-img/men.PNG",
    route: "shop/mens"
  },
]

export default function Directory() {

  return (
    <DirectoryContainer>
    {categories.map((category) => (
      <DirectoryItem key={category.id} category={category} />
    ))}
  </DirectoryContainer>
  )
}

