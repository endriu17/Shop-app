import React, { Component } from "react";
import "./Product.css";

class Product extends Component {
  render() {
    return (
      <div id={this.props.id} className="Product">
        <img src={this.props.photo} alt={this.props.name} />
        <div className="product-wrapper">
          <span className="product-name">{this.props.name}</span>
          <span className="product-price product-price_promo"> $ {this.props.price}</span>
        </div>
      </div>
    );
  }
}

export default Product;
