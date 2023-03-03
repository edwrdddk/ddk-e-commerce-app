import Categories from "./components/categories/categories";

function App() {

  const categories = [
    {
      id: 1,
      title: "Hats",
      imageUrl: "images/hat.PNG"
    },
    {
      id: 2,
      title: "Shirts",
      imageUrl: "images/shirts.PNG"
    },
    {
      id: 3,
      title: "Shoes",
      imageUrl: "images/shoes.PNG"
    },
    {
      id: 4,
      title: "Womens",
      imageUrl: "images/men.PNG"
    },
    {
      id: 5,
      title: "Mens",
      imageUrl: "images/women.PNG"
    },
  ]

  return (
    <Categories categories={categories}/>
  );
  
}

export default App;
