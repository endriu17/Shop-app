import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";

const Product = props => {

  return (
    <Link to={`/product/${props.id}`} style={{backgroundImage: `url(${props.photo})`, backgroundRepeat: `no-repeat`, backgroundSize: `cover`, backgroundPosition: `center`}} className="product" {...props.value}>
      <div className="product-item__new" style={{visibility: ((props.category[0] === "")? 'hidden':'show')}}/>
      <span className="product-item__text" style={{visibility: ((props.category[0] === "")? 'hidden':'show')}}>{props.category[0]}!</span>
      <h4 className="product-item__promo">{props.category[2]}</h4>
      {/* <img src={props.photo} alt={props.name} /> */}
      <div className="product-wrapper" style={{width: '100%'}}>
        <span className="product-name">{props.name}</span>
        <div className="product-price_wrapper" >
          <span className="product-price ">$ {props.price.toFixed(2)}</span>
          <span className="product-item_special" style={{visibility: ((props.category[1] === "")? 'hidden':'show')}}>{props.category[1]}</span>
        </div>
          <span className="product-price_old">{props.oldPrice}</span>
      </div>
    </Link>
  );
};

export default Product;
