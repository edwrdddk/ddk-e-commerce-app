// import { Link } from "react-router-dom";
import { FC } from "react";
import ProductCard from "../product-card/product-card";
import {
  CategoryPreviewContainer,
  Title,
  Preview,
} from './category-preview.styles';
import { CategoryItem } from "../../store/categories/category.types";

type CategoryPreviewProps = {
  title: string;
  products: CategoryItem[];
}

const CategoryPreview: FC<CategoryPreviewProps> = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
          <Title to={title}>{title.charAt(0).toUpperCase() + title.slice(1)}</Title>
      </h2>
      <Preview>
        {products
          .filter((_, idx) => idx < 3) // First argument - product that I don’t wanna use , the second argument is the index which is the index inside of the array.
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  )
}

export default CategoryPreview;

