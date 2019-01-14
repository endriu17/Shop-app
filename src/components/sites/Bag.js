import React, { Component } from "react";
import "./index.css";
import data from "../Product/data.json";

class Bag extends Component {
  constructor(props) {
    super(props);

    this.state = {
      price: [],
      item: [],
      bag: this.props.value
    };
    console.log(this.props.value);
  }

  render() {
    let bagMap = this.state.bag;
    let bagItems = bagMap.map(item => (
      <li key={item} className="bag-item_list">
        <img src={data[item - 1].photo} alt={data[item - 1].name} />
        <div className="bag-name__wrapper">
          <span className="bag-item__name">{data[item - 1].name}</span>
          <p className="bag-item__description">{data[item - 1].description}</p>
        </div>
        <span className="bag-item__price">
          ${data[item - 1].price.toFixed(2)}
        </span>
        <div className="bag-number__wrapper">
          <div className="number-wrapper__set">
            <span className="number-set">-</span>
            <span className="bag-item__number">1</span>
            <span className="number-set">+</span>
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
        <div>
          <input className="bag-input__code" placeholder="Rabatt code"></input>
          <span className="bag-sum__total">Total: </span>
          <button className="bag-button__pay">Pay</button>
        </div>
      </div>
    );
  }
}

export default Bag;
