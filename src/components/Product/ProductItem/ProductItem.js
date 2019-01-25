import React, { Component } from "react";
import data from "../data.json";
import "../Product.css";

class ProductItem extends Component {
  constructor(props) {
    super(props);
    let param = this.props.id - 1;
    this.state = {
      id: param,
      photo: data[param].photo,
      name: data[param].name,
      price: data[param].price.toFixed(2),
      oldPrice: data[param].oldPrice,
      description: data[param].description,
      category: data[param].category,
      text: "Add to bag",
      color: "",
      isButtonDisabled: false,
      productID: []
    };
  }

  handleClick(e) {
    this.setState({
      text: "Product is in the bag",
      color: "red",
      added: "Product is already added to the bag"
    });
    this.props.addToBag(this.props.id);
  }

  render() {
    return (
      <div className="product-container">
        <div className="product-item">
          <div className="product-item__new" style={{visibility: ((this.state.category[0] === "")? 'hidden':'show')}}></div>
          <span className="product-item__text" style={{visibility: ((this.state.category[0] === "")? 'hidden':'show')}}>{this.state.category[0]}!</span>
          <h4 className="product-item__promo">{this.state.category[2]}</h4>
          <img
            className="product-photo"
            src={this.state.photo}
            alt={this.state.name}
          />
          <div className="product-wrapper" style={{ width: "50%" }}>
            <span className="product-name">{this.state.name}</span>
            <div className="product-price_wrapper">
              <span className="product-price">${this.state.price}</span>
              <span className="product-price_old">{this.state.oldPrice}</span>
              <p className="product-item_special" style={{visibility: ((this.state.category[1] === "")? 'hidden':'show')}}>{this.state.category[1]}</p>
            </div>
            <p className="product-description">{this.state.description}</p>
            <button
              style={{backgroundColor:`${this.state.color}`}}
              className="add-to-bag"
              onClick={() => this.handleClick(this.props.id)}
              text={"Add to bag"}
            >
              {this.state.text}
            </button>
            <p>{this.state.added}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductItem;
