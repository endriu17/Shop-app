import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import data from "../Product/data.json";

class Bag extends Component {
  constructor(props) {
    super(props);

    this.state = {
      price: [],
      item: 1,
      bag: [],
      products: [],
      order: false,
      orderItem: []
    };
    this.showOrder = this.showOrder.bind(this);
  }
  showOrder(orderItem) {
    this.setState({
      order: true,
      orderItem: orderItem
    });
  }
  render() {
    if (this.props.bag.length === 0) {
      return (
        <h1
          style={{
            fontSize: "2em",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "80vh",
            marginTop: "0"
          }}
        >
          It's nothing in the shoppingbag now...
        </h1>
      );
    } else if (!this.state.order) {
      const bagMap = this.props.bag;
      const priceSum = [];
      const bagItems = bagMap.map((item, i) => (
        <li key={i} className="bag-item_list">
          <img src={data[item.id - 1].photo} alt={data[item.id - 1].name} />
          <div className="bag-name__wrapper">
            <span className="bag-item__name">{data[item.id - 1].name}</span>
            <p className="bag-item__description">
              {data[item.id - 1].description}
            </p>
          </div>
          <span className="price-push">
            {priceSum.push(data[item.id - 1].price * item.count)}
          </span>
          <span className="bag-item__price">
            ${data[item.id - 1].price.toFixed(2) * item.count}
          </span>
          <div className="bag-number__wrapper">
            <div className="number-wrapper__set">
              <i
                className="number-set fas fa-minus"
                onClick={() => this.props.removeItem(data[item.id - 1].id)}
              />
              <span className="bag-item__number">{item.count}</span>
              <i
                className="number-set fas fa-plus"
                onClick={() => this.props.addToBag(data[item.id - 1].id)}
              />
              <p>itm.</p>
            </div>
            <span
              className="bag-remove__item"
              onClick={() => this.props.removeFromBag(data[item.id - 1].id)}
            >
              remove item
            </span>
          </div>
        </li>
      ));
      return (
        <div className="bag">
          <h2>Shopping bag</h2>
          <ul className="bag-items">{bagItems}</ul>
          <div className="bag-total">
            <input className="bag-input__code" placeholder="Rabatt code" />
            <span className="bag-sum__total">
              TOTAL: $
              {priceSum.reduce((total, value) => total + value).toFixed(2)}
            </span>
            <button
              className="bag-button__pay"
              onClick={() => this.showOrder(bagItems)}
            >
              Pay
            </button>
          </div>
        </div>
      );
    } else {
      const bagMap = this.props.bag;
      const priceSum = [];
      const bagItems = bagMap.map((item, i) => (
        <li key={i} className="bag-item_list">
          <div className="bag-name__wrapper">
            <span className="bag-item__name">{data[item.id - 1].name}</span>
          </div>
          <span className="price-push">
            {priceSum.push(data[item.id - 1].price * item.count)}
          </span>
          <span className="bag-item__price">
            ${data[item.id - 1].price.toFixed(2) * item.count}
          </span>
          <div className="bag-number__wrapper">
            <div className="number-wrapper__set">
              <span className="bag-item__number">{item.count}</span>
            </div>
          </div>
        </li>
      ));
      return (
        <div className="bag">
          <h2>Your order</h2>
          <ul className="bag-items">{bagItems}</ul>
          <div className="bag-total">
            <span className="bag-sum__total">
              TOTAL: $
              {priceSum.reduce((total, value) => total + value).toFixed(2)} 

              minus rabat 10%  

              {((priceSum.reduce((total, value) => total + value).toFixed(2))*10)/100}
            </span>
            <Link to="/"
              className="bag-button__pay"
              onClick={() => this.props.removeFromBag(-1)}
            >
              Send
            </Link>
          </div>
        </div>
      );
    }
  }
}
export default Bag;
