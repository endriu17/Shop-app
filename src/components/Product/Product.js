import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";

const Product = (props) => {

return (
  <Link
    to={`/product/${props.id}`}
    className="Product"
    {...props}
  >
    <img src={props.photo} alt={props.name} />
    <div className="product-wrapper">
      <span className="product-name">{props.name}</span>
      <span className="product-price product-price_promo">
        $ {props.price}
      </span>
    </div>
  </Link>     
)};

export default Product;
