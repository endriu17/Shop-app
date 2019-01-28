import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import { Table } from "reactstrap";
import data from "../Product/data.json";

class Bag extends Component {
  constructor(props) {
    super(props);

    this.state = {
      order: false,
      rabat: ["", null, ""]
    };
    this.showOrder = this.showOrder.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  showOrder() {
    this.setState({
      order: true,
      value: "",
      validate: ""
    });
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
      validate: false
    });
  }

  handleSubmit(event) {
    alert(
      "The rebate code: " +
        this.state.value +
        " is valid. You get 10% discount! "
    );
    event.preventDefault();

     this.setState({
        validate: "Your rabat: ",
        rabat: ["Discount: ", 10, "%"]
      })

  }

  render() {
    console.log(this.props)
    const bagMap = this.props.bag;
    const priceSum = [];
    if (this.props.bag.length === 0) {
      return (
        <h1 className="bag-empty">It's nothing in the shoppingbag now...</h1>
      );
    } else if (!this.state.order) {
      const bagItems = bagMap.map((item, i) => (
        <li key={`product-${data[item.id - 1].id}`} id={data[item.id - 1].id} className="bag-item_list">
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
              onClick={() => this.props.removeFromBag(data[item.id - 1].id, -1)}
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
            <form onSubmit={this.handleSubmit}>
              <label>
                <p
                className="bag-text_label"
                  style={{
                    visibility: !this.state.validate ? "show" : "hidden"
                  }}
                >
                  Enter the code <br/> (and press enter):
                </p>
                <input
                  type="text"
                  name="code"
                  value={this.state.value}
                  onChange={this.handleChange}
                  className="bag-input_code"
                  placeholder="Rabatt code"
                />
                <span />
              </label>
              <p className="bag-text_label">{this.state.rabat}</p>
            </form>
            <span className="bag-sum__total">
              TOTAL: ${" "}
              {(
                priceSum.reduce((total, value) => total + value) -
                (priceSum.reduce((total, value) => total + value) *
                  this.state.rabat[1]) /
                  100
              ).toFixed(2)}
            </span>
            <button
              className="bag-button__pay"
              onClick={() => this.showOrder()}
            >
              Pay
            </button>
          </div>
        </div>
      );
    } else {
      const bagItems = bagMap.map((item, i) => (
        <tr key={data[item.id - 1].id} data={priceSum.push(data[item.id - 1].price * item.count)}>
          <td>1</td>
          <td>{data[item.id - 1].name}</td>
          <td>{item.count}</td>
          <td>{data[item.id - 1].price.toFixed(2)}</td>
          <td>{(data[item.id - 1].price * item.count).toFixed(2)}</td>
        </tr>
      ));
      return (
        <div className="bag">
          <h2>Your order</h2>
          <Table className="minimalistBlack">
            <thead>
              <tr>
                <th>#</th>
                <th>Product</th>
                <th>Items</th>
                <th>Price</th>
                <th>Sum</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <td />
                <td />
                <td />
                <td>
                  <p>Rabat:</p>{" "}
                  {(
                    (priceSum.reduce((total, value) => total + value) *
                      this.state.rabat[1]) /
                    100
                  ).toFixed(2)}
                </td>
                <td>
                  <p>Total: </p>{" "}
                  {(
                    priceSum.reduce((total, value) => total + value) -
                    (priceSum.reduce((total, value) => total + value) *
                      this.state.rabat[1]) /
                      100
                  ).toFixed(2)}
                </td>
              </tr>
            </tfoot>
            <tbody>{bagItems}</tbody>
          </Table>
          <Link
            to="/"
            className="bag-button__pay"
            onClick={() => {
              alert("Success! Your order has been completed!");
              this.props.removeFromBag(-1);
            }}
          >
            Ok
          </Link>
        </div>
      );
    }
  }
}
export default Bag;
