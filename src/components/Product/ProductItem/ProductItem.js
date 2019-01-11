import React, { Component } from "react";
import data from "../data.json";
import "../Product.css";

class ProductItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id - 1,
      photo: data[this.props.match.params.id - 1].photo,
      name: data[this.props.match.params.id - 1].name,
      price: data[this.props.match.params.id - 1].price.toFixed(2),
      description: data[this.props.match.params.id - 1].description
    };

    console.log(data[this.state.id]);
  }

  render() {
    return (
      <div className="product-container">
        <div className="product-item">
          <img
            className="product-photo"
            src={this.state.photo}
            alt={this.state.name}
          />
          <div className="product-wrapper">
            <span className="product-name">{this.state.name}</span>
            <span className="product-price product-price_promo">
              ${this.state.price}
            </span>
            <p className="product-description">{this.state.description}</p>
            <button className="add_to-bag">Add to bag</button>
          </div>
        </div>
      </div>
    );
  }
}
export default ProductItem;
