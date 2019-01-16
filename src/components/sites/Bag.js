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
      products: [
        {
          productId: [],
          count: 1
        }
      ]
    };
  }

  componentWillMount() {
    let counts = [];
    this.props.bag.forEach((x) => counts[x] = (counts[x] || 0) + 1);
    const filtered = counts.filter((el, id) => el != null);
    console.log(filtered);
    const unique = this.props.bag.filter((v, i, a) => a.indexOf(v) === i);
    this.setState({ bag: unique });
  }

  removeItem() {
    return this.props.value - 1;
  }

  addItem() {
    return this.props.value + 1;
  }

  render() {
    console.log(this.state.bag);
    if (this.state.bag.length === 0) {
      return (
        <div className="bag" style={{ fontSize: "26px", color: "red" }}>
          Na razie tu nic nie ma...
        </div>
      );
    } else {
      const bagMap = this.state.bag;
      const priceSum = [];
      const bagItems = bagMap.map(item => (
        <li key={item} className="bag-item_list">
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
              <span
                className="number-set"
                // onClick={() => this.state.products.push({id: this.props.id}) - 1}
              >
                -
              </span>
              <span className="bag-item__number">{this.state.bag.length}</span>
              <span
                className="number-set"
                // onClick={() => {
                //   this.props.addToBag(this.props.id)
                //   this.setState(prevState => ({ bag: [...prevState.bag, parseFloat(this.props.id)]}))
                //   }}
              >
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
