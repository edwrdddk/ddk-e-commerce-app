import { useContext } from "react";
import "./product-card.scss";
import { CartContext } from "../../contexts/cart.context"; 
import Button from "../button/button";

export default function ProductCard({ product }) {
  const { name, imageUrl, price} = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <div className="product-card-container">
    <img src={imageUrl} alt={`${name}`} />
    <div className="footer">
      <span className="name">{name}</span>
      <span className="price">{price}</span>
    </div>
    <Button buttonType="inverted" onClick={addProductToCart}>Add to card</Button>
  </div>
  )
}