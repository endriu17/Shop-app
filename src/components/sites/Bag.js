import React, { Component } from "react";
import "./index.css";
import data from "../Product/data.json";

class Bag extends Component {
  constructor(props) {
    super(props);

    this.state = {
      price: [],
      item: 1,
      bag: [],
      products: []
    };
  }

  componentWillMount() {
    let counts = [];
    this.props.bag.forEach(x => (counts[x] = (counts[x] || 0) + 1));
    const filtered = counts.filter((el, id) => el != null);
    console.log(filtered);
    const unique = this.props.bag.filter((v, i, a) => a.indexOf(v) === i);
    this.setState({ bag: unique });
    console.log(this.state.bag);
  }

  render() {
    if (this.state.bag.length === 0) {
      return (
        <div
          className="bag"
          style={{
            fontSize: "36px",
            padding: "150px 0",
            height: "55vh",
            margin: "54px auto"
          }}
        >
          It's nothing in the shoppingbag yet...
        </div>
      );
    } else {
      const bagMap = this.state.bag;
      const priceSum = [];
      const bagItems = bagMap.map(item => (
        <li key={data[item - 1].id} className="bag-item_list">
          <img src={data[item - 1].photo} alt={data[item - 1].name} />
          <div className="bag-name__wrapper">
            <span className="bag-item__name">{data[item - 1].name}</span>
            <p className="bag-item__description">
              {data[item - 1].description}
            </p>
          </div>
          <span className="price-push">
            {priceSum.push(data[item - 1].price)}
          </span>
          <span className="bag-item__price">
            ${data[item - 1].price.toFixed(2)}
          </span>
          <div className="bag-number__wrapper">
            <div className="number-wrapper__set">
              <span className="number-set fas fa-plus" onClick={this.removeItem}>
                -
              </span>
              <span className="bag-item__number">{this.state.item}</span>
              <span className="number-set fas fa-plus" onClick={this.addItem}>
                +
              </span>
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
            <input className="bag-input__code" placeholder="Rabatt code" />
            <span className="bag-sum__total">
              TOTAL: $
              {priceSum.reduce((total, value) => total + value).toFixed(2)}{" "}
            </span>
            <button className="bag-button__pay">Pay</button>
          </div>
        </div>
      );
    }
  }
}
export default Bag;
