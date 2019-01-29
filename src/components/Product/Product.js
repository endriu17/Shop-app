import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";
import data from "./data.json"

const Product = props => {
  return (
    <Link
      to={`/product/${props.id}`}
      key={`product-${data[props.id].id-1}`}
      id={`product-${data[props.id].id-1}`}
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
      <div className="product-wrapper" style={{ width: "100%" }}>
        <span className="product-name">{props.name}</span>
        <div className="product-price_wrapper">
          <span className="product-price ">
            $ {props.price.toFixed(2)}
          </span>
          <span
            className="product-item_special"
            style={{
              visibility: props.category[1] === "" ? "hidden" : "show"
            }}
          >
            {props.category[1]}
          </span>
        <span className="product-price_old">{props.oldprice}</span>
        </div>
      </div>
    </Link>
  );
};

export default Product;
