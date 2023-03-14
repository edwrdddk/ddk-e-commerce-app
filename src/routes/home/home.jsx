import Categories from "../../components/categories/categories";

export default function Home() {

  const categories = [
    {
      id: 1,
      title: "Hats",
      imageUrl: process.env.PUBLIC_URL + "/images/home-img/hat.PNG"
    },
    {
      id: 2,
      title: "Coats",
      imageUrl: process.env.PUBLIC_URL + "/images/home-img/coats.PNG"
    },
    {
      id: 3,
      title: "Shoes",
      imageUrl: process.env.PUBLIC_URL + "/images/home-img/shoes.PNG"
    },
    {
      id: 4,
      title: "Womens",
      imageUrl: process.env.PUBLIC_URL + "/images/home-img/men.PNG"
    },
    {
      id: 5,
      title: "Mens",
      imageUrl: process.env.PUBLIC_URL + "/images/home-img/women.PNG"
    },
  ]

  return (
    <div>
      <Categories categories={categories}/>
    </div>
  );

}


