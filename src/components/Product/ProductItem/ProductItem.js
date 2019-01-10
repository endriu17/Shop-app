import React, { Component } from "react";
import "../Product.css";


class ProductItem extends Component {
  constructor(props) {
    super(props);
    
    console.log(this.props);
  } 
 
  render() {
    return (
      <div  className="product-item">
        <img src={this.props.photo} alt={this.props.name} />
        <div className="product-wrapper">
          <span className="product-name">{this.props.name}</span>
          <span className="product-price product-price_promo">
            {this.props.price}
          </span>
          <p>{this.props.description}</p>
        </div>
        <button>Add to bag</button>
      </div>
    )};
}
export default ProductItem;
