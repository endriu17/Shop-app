import React, { Component } from "react";
import data from "../data.json";
import "../Product.css";

class ProductItem extends Component {
  constructor(props) {
    super(props);
    let param = parseFloat(this.props.match.params.id)-1;
    this.state = {
      id: data[param].id,
      photo: data[param].photo,
      name: data[param].name,
      price: data[param].price.toFixed(2),
      oldPrice: data[param].oldPrice,
      description: data[param].description,
      category: data[param].category,
      text: "Add to bag",
      added: "Product is already added to the shoppingbag",
      // isButtonDisabled: false,
      // productID: []
    };
  }

  handleClick(e) {
    this.setState({
      text: "add next one"
    });
    this.props.addToBag(e);
    console.log(e)
  }

  render() {
    console.log(this.props.id);
    let param = parseFloat(this.props.match.params.id)-1;
    console.log(data[param].id);
        return (
      <div className="product-container">
        <div className="product-item">
          <div
            className="product-item_new"
            style={{
              visibility: data[param].category[0] === "" ? "hidden" : "show"
            }}
          />
          <span
            className="product-item_text"
            style={{
              visibility: data[param].category[0] === "" ? "hidden" : "show"
            }}
          >
            {this.state.category[0]}!
          </span>
          <h4 className="product-item_promo">{data[param].category[2]}</h4>
          <img
            className="product-photo"
            src={data[param].photo}
            alt={data[param].name}
          />
          <div className="product-wrapper_item" style={{ width: "60%" }}>
            <span className="product-name">{data[param].name}</span>
            <div className="product-price_wrapper">
              <span className="product-price">${data[param].price}</span>
              <span className="product-price_old">{data[param].oldPrice}</span>
              <p
                className="product-item_special"
                style={{
                  visibility: data[param].category[1] === "" ? "hidden" : "show"
                }}
              >
                {data[param].category[1]}
              </p>
            </div>
            <p className="product-description">{data[param].description}</p>
          </div>
          <button
            style={{
              backgroundColor: this.props.bag[param]
                ? "red"
                : "#000"
            }}
            className="add-to-bag"
            onClick={() => {
              this.handleClick(parseFloat(this.props.match.params.id));
            }}
            text={"Add to bag"}
          >
            {" "}
            {this.state.text}
          </button>
          <p className="add-to-bag_text">
            {this.props.bag[param] ? this.state.added : " "}
          </p>
          <p className="add-to-bag_count" style={{color: this.props.bag.find(item => item.id === parseFloat(this.props.match.params.id))  ? "#000" : "#fff"}}>
            Items in shoppingbag:{" "} <b>{this.props.bag.find(item => item.id === parseFloat(this.props.match.params.id)) 
              ? this.props.bag.find(item => item.id === parseFloat(this.props.match.params.id)).count
              : 0}</b>
          </p>
        </div>
      </div>
    );
  }
}

export default ProductItem;
