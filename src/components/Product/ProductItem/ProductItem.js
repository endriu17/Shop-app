import React, { Component } from "react";
import data from "../data.json";
import "../Product.css";

class ProductItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Add to bag",
      color: "#000",
      isButtonDisabled: false,
      productID: [],
      bag: [4]
    };
  }
  componentWillMount() {
    let param = this.props.match.params.id - 1;

    this.setState({
      id: param,
      photo: data[param].photo,
      name: data[param].name,
      price: data[param].price.toFixed(2),
      description: data[param].description
    });
  }

  handleClick(e) {
    this.setState({
      text: "Product added to bag",
      color: "red",
      isButtonDisabled: true,
    });
    // this.props.match.params.addToBag(e);
    console.log(e)
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
            <button
              style={{ backgroundColor: `${this.state.color}` }}
              className="add_to-bag"
              onClick={() => 
                this.handleClick(this.state.id)
              }
              disabled={this.state.isButtonDisabled}
            >
              {this.state.text}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductItem;
