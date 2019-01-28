import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Product.css";

class Product extends Component {
  constructor(props) {
    super(props);
  
  }

  render() {
    return (
      <Link
        to={`/product/${this.props.id}`}
        style={{
          backgroundImage: `url(${this.props.photo})`,
          backgroundRepeat: `no-repeat`,
          backgroundSize: `cover`,
          backgroundPosition: `center`
        }}
        className="product"
        {...this.props.value}
      >
        <div
          className="product-item_new"
          style={{
            visibility: this.props.category[0] === "" ? "hidden" : "show"
          }}
        />
        <span
          className="product-item_text"
          style={{
            visibility: this.props.category[0] === "" ? "hidden" : "show"
          }}
        >
          {this.props.category[0]}!
        </span>
        <h4 className="product_promo">{this.props.category[2]}</h4>
        {/* <img src={props.photo} alt={props.name} /> */}
        <div className="product-wrapper" style={{ width: "100%" }}>
          <span className="product-name">{this.props.name}</span>
          <div className="product-price_wrapper">
            <span className="product-price ">
              $ {this.props.price.toFixed(2)}
            </span>
            <span
              className="product-item_special"
              style={{
                visibility: this.props.category[1] === "" ? "hidden" : "show"
              }}
            >
              {this.props.category[1]}
            </span>
          </div>
          <span className="product-price_old">{this.props.oldPrice}</span>
        </div>
      </Link>
    );
  }
}

export default Product;
