import { Link } from "react-router-dom";
import ProductCard from "../product-card/product-card";
import "./category-preview.scss";

export default function CategoryPreview({ title, products }) {
  return (
    <div className="category-preview-container">
      <h2>
          <Link className="title" to={title}>{title.charAt(0).toUpperCase() + title.slice(1)}</Link>
      </h2>
      <div className="preview">
        {products
          .filter((_, idx) => idx < 3) // First argument - product that I don’t wanna use , the second argument is the index which is the index inside of the array.
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  )
}