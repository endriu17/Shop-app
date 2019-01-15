import React, { Component } from "react";
import "./index.css";
import data from "../Product/data.json";

class Bag extends Component {
  constructor(props) {
    super(props);

    this.state = {
      price: [],
      item: 1,
      bag: this.props.value
    };
    console.log(this.props.value);
    
  }

  removeItem(e) {
    
    return this.valueCount + e;
  }

  render() {
    let bagMap = this.state.bag;
    const priceSum = [];
    let bagItems = bagMap.map(item => (
      <li key={item} className="bag-item_list">
        <img src={data[item - 1].photo} alt={data[item - 1].name} />
        <div className="bag-name__wrapper">
          <span className="bag-item__name">{data[item - 1].name}</span>
          <p className="bag-item__description">{data[item - 1].description}</p>
        </div>
        <span className="price-push">{priceSum.push(data[item - 1].price)}</span>
        <span  className="bag-item__price">
          ${data[item - 1].price.toFixed(2)}
        </span>
        <div className="bag-number__wrapper">
          <div className="number-wrapper__set">
            <span className="number-set" onClick={() => this.removeItem(-1)}>-</span>
            <span counter='1' className="bag-item__number">{this.props.counter}</span>
            <span className="number-set" onClick={() => this.addItem(+1)}>+</span>
            <p>itm.</p>
          </div>
          <span className="bag-remove__item">remove item</span>
        </div>
      </li>
    ));
    return (
      <div className="bag">
        <h2>Shopping bag</h2>
        <ul className="bag-items">{bagItems}</ul>
        <div className="bag-total">
          <input className="bag-input__code" placeholder="Rabatt code"></input>
          <span className="bag-sum__total">TOTAL: ${priceSum.reduce((total, value) => total + value).toFixed(2)} </span>
          <button className="bag-button__pay">Pay</button>
        </div>
      </div>
    );
  }
}

export default Bag;
