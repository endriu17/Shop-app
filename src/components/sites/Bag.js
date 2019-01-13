import React, { Component } from "react";
import "./index.css";
import bag from "../Product/ProductItem/bag.json";

class Bag extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          price: [],
          item: [],
          id: bag.id
        };
        console.log(props)
      }

  render() {
    return (
      <div id={this.props.id} className="bag">
        <h2>Shopping bag</h2>
        <img src={this.props.photo} alt={this.props.name} />
        <span className="product-name">{this.props.name}</span>
        <div className="product-wrapper">
          <p>{this.props.description}</p>
          <span className="product-price product-price_promo">
            {this.props[0]}
          </span>
          <span>Add item..</span>
        </div>
        <div>
            <input placeholder='kod rabatowy'></input>
            <span>Total: {this.state.price}</span>
        </div>
      </div>
    );
  }
}

export default Bag;
