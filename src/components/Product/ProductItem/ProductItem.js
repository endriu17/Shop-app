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
    };
    setTimeout(() => {
      this.setState({
        status: 1
      })
    }, 2000);
  }
 
  handleClick(e) {
    this.setState({
      text: "add next one"
    });
    this.props.addToBag(e);
    console.log(e)
  }

  render() {
    const found = data.find(x => x.id === this.props.id);
    const foundMatch = this.props.bag.find(item => item.id === parseFloat(found.id));
    // console.log(this.props);
        return (
      <div className="product-container" >
        <div className="product-item">
          <div
            className="product-item_new"
            style={{
              visibility: found.category[0] === "" ? "hidden" : "show"
            }}
          />
          <span
            className="product-item_text"
            style={{
              visibility: found.category[0] === "" ? "hidden" : "show"
            }}
          >
            {found.category[0]}!
          </span>
          <h4 className="product-item_promo">{data[this.props.id -1].category[2]}</h4>
          <img
            className="product-photo"
            src={found.photo}
            alt={found.name}
          />
          <div className="product-wrapper_item" style={{ width: "60%" }}>
            <span className="product-name">{found.name}</span>
            <div className="product-price_wrapper">
              <span className="product-price">${found.price}</span>
              <span className="product-price_old">{found.oldPrice}</span>
              <p
                className="product-item_special"
                style={{
                  visibility: found.category[1] === "" ? "hidden" : "show"
                }}
              >
                {found.category[1]}
               
              </p>
            </div>
            <p className="product-description">{found.description}</p>
          </div>
          <button
            style={{
              backgroundColor: foundMatch
                ? "red"
                : "#000"
            }}
            className="add-to-bag"
            onClick={() => {
              this.handleClick(found.id);
            }}
            text={"Add to bag"}
          >
            {" "}
            {this.state.text}
          </button>
          <p className="add-to-bag_text">
            {foundMatch ? this.state.added : " "}
          </p>
          <p className="add-to-bag_count" style={{color: foundMatch  ? "#000" : "#fff"}}>
            Items in shoppingbag:{" "} <b>{foundMatch 
              ? foundMatch.count
              : 0}</b>
          </p>
        </div>
      </div>
    );
  }
}

export default ProductItem;
