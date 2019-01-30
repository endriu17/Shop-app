import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import { Table } from "reactstrap";
import bag from "../Product/main.json";

class Bag extends Component {
  constructor(props) {
    super(props);

    this.state = {
      order: false,
      rabat: ["", null, ""],
      disabled: false
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
      validate: false,
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
      rabat: ["Discount: ", 10, "%"],
      disabled: true
    });
  }

  render() {
    console.log(this.props);
    const bagMap = this.props.bag;
    const priceSum = [];
    if (this.props.bag.length === 0) {
      return (
        <div className="bag-empty">
          <img src="/photos/shoppingbag.png" alt={"shoppingbag"} />
          <h1>It's nothing in the shoppingbag now...</h1>
        </div>
      );
    } else if (!this.state.order) {
      const bagItems = bagMap.map((item, i) => (
        <li
          key={`product-${bag[item.id - 1].id}`}
          id={bag[item.id - 1].id}
          className="bag-item_list"
        >
          <img src={bag[item.id - 1].photo} alt={bag[item.id - 1].name} />
          <div className="bag-name_wrapper">
            <span className="bag-item_name">{bag[item.id - 1].name}</span>
            <p className="bag-item_description">
              {bag[item.id - 1].description}
            </p>
          </div>
          <span className="price-push">
            {priceSum.push(bag[item.id - 1].price * item.count)}
          </span>
          <span className="bag-item_price">
            ${bag[item.id - 1].price.toFixed(2) * item.count}
          </span>
          <div className="bag-number_wrapper">
            <div className="number-wrapper_set">
              <i
                className="number-set fas fa-minus"
                onClick={() => this.props.removeItem(bag[item.id - 1].id)}
              />
              <span className="bag-item_number">{item.count}</span>
              <i
                className="number-set fas fa-plus"
                onClick={() => this.props.addToBag(bag[item.id - 1].id)}
              />
              <p>itm.</p>
            </div>
            <span
              className="bag-remove_item"
              onClick={() => this.props.removeFromBag(bag[item.id - 1].id, -1)}
            >
              <i className="far fa-trash-alt"></i>
            </span>
          </div>
        </li>
      ));
      return (
        <div className="bag">
          <img
            className="shoppingbag-image"
            src="/photos/shoppingbag.png"
            alt={"shoppingbag"}
          />
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
                  Enter the code <br /> (and press enter):
                </p>
                <input
                  type="text"
                  name="code"
                  value={this.state.value}
                  onChange={this.handleChange}
                  className="bag-input_code"
                  placeholder="Rabatt code"
                  disabled = {(this.state.disabled)? true : false}
                />
                <span />
              </label>
              <p className="bag-text_label">{this.state.rabat}</p>
            </form>
            <span className="bag-sum_total">
              TOTAL: ${" "}
              {(
                priceSum.reduce((total, value) => total + value) -
                (priceSum.reduce((total, value) => total + value) *
                  this.state.rabat[1]) /
                  100
              ).toFixed(2)}
            </span>
            <button
              className="bag-button_pay"
              onClick={() => this.showOrder()}
            >
              Pay
            </button>
          </div>
        </div>
      );
    } else {
      const bagItems = bagMap.map((item, i) => (
        <tr
          key={bag[item.id - 1].id}
          data={priceSum.push(bag[item.id - 1].price * item.count)}
        >
          <td>1</td>
          <td>{bag[item.id - 1].name}</td>
          <td>{item.count}</td>
          <td>{bag[item.id - 1].price.toFixed(2)}</td>
          <td>{(bag[item.id - 1].price * item.count).toFixed(2)}</td>
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
            className="bag-button_pay"
            onClick={() => {
              alert("Success! Your order has been completed!");
              this.props.removeFromBag(-1);
            }}
          >
            Ok
          </Link>
          <img
            className="order-image"
            src="/photos/order.png"
            alt={"order"}
          />
        </div>
      );
    }
  }
}
export default Bag;
