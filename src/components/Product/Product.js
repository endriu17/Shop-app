import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";

const Product = props => {
  return (
    <Link to={`/product/${props.id}`} className="product" {...props.value}>
      <div className="product-item__new" />
      <span className="product-item__text">{props.category[0]}!</span>
      <h4 className="product-item__promo">{props.category[2]}</h4>
      <img src={props.photo} alt={props.name} />
      <div className="product-wrapper" style={{width: '100%'}}>
        <span className="product-name">{props.name}</span>
        <div className="product-price_wrapper" >
          <span className="product-price ">$ {props.price.toFixed(2)}</span>
          <span className="product-item__lastone">{props.category[1]}</span>
        </div>
      </div>
    </Link>
  );
};

export default Product;
