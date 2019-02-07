import React from "react";
import { Link } from "react-router-dom";
import "./css/Product.css"


const Product = props => {
  return (
    <Link
      to={`/product/${props.id}`}
      key={`product-${props.id}`}
      id={`product-${props.id}`}
      style={{
        backgroundImage: `url(${props.photo})`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `cover`,
        backgroundPosition: `center`
      }}
      className="product"
      {...props}
    >
      <div
        className="product-item_new"
        style={{
          visibility: props.category[0] === "" ? "hidden" : "show"
        }}
      />
      <span
        className="product-item_text"
        style={{
          visibility: props.category[0] === "" ? "hidden" : "show"
        }}
      >
        {props.category[0]}!
      </span>
      <h4 className="product_promo">{props.category[2]}</h4>
          <span
            className="product-special_home"
            style={{
              visibility: props.category[1] === "" ? "hidden" : "show"
            }}
          >
            {props.category[1]}
          </span>
      <div className="product-wrapper">
        <span className="product-name">{props.name}</span>
        <div className="product-price_wrapper">
          <span className="product-price ">
            $ {props.price.toFixed(2)}
          </span>
        <span className="products-price_old">{props.oldprice}</span>
        </div>
      </div>
    </Link>
  );
};

export default Product;
