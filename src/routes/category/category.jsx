import { useContext, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card";
import Spinner from "../../components/spinner/spinner";
import { selectCategoriesMap, selectCategoriesIsLoading } from "../../store/categories/category.selector";
import { CategoryContainer, Title } from './category.styles';

export default function Category() {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap])

  return (
    <>
      <Title>{category.charAt(0).toUpperCase() + category.slice(1)}</Title>
      {
        isLoading ? <Spinner /> :
          <CategoryContainer> 
            {products && products.map((product) => <ProductCard key={product.id} product={product} />)}
          </CategoryContainer>
      }

    </>
  )
}