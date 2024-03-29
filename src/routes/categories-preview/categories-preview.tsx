import { useSelector } from "react-redux";
// import { CategoriesContext } from "../../contexts/categories.context";
import { selectCategoriesMap, selectCategoriesIsLoading } from "../../store/categories/category.selector";
import CategoryPreview from "../../components/category-preview/category-preview";
import Spinner from "../../components/spinner/spinner";

export default function CategoriesPreview() {
  // const { categoriesMap } = useContext(CategoriesContext);
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  return (
    <>
      {isLoading ? <Spinner /> :
        Object.keys(categoriesMap).map(title => {
          const products = categoriesMap[title];
          return (<CategoryPreview key={title} title={title} products={products} />);
        })
      }
    </>
  )
}



