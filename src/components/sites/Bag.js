import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import "./index.css";
// import { Table } from "reactstrap";
import bag from "../Product/main.json";

class Bag extends Component {
  constructor(props) {
    super(props);

    this.state = {
      order: false,
      rabat: ["", null, ""],
      disabled: false,
      background: false,
      name: "",
      description: ""
    };
    this.showOrder = this.showOrder.bind(this);
    this.showDescription = this.showDescription.bind(this);
    this.closeDescription = this.closeDescription.bind(this);
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

  showDescription(name, text) {
    this.setState({
      background: true,
      name: name,
      description: text
    });
  }

  closeDescription() {
    this.setState({
      background: false
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
          <div
            className="bag-description_link"
            onClick={() =>
              this.showDescription(
                bag[item.id - 1].name,
                bag[item.id - 1].description
              )
            }
            style={{
              backgroundImage: `url(${bag[item.id - 1].photo})`,
              backgroundRepeat: `no-repeat`,
              backgroundSize: `cover`,
              backgroundPosition: `center`
            }}
          />
          <div className="bag-name_wrapper">
            <h2 className="bag-item_name">{bag[item.id - 1].name}</h2>
            <p className="bag-description_label">
              (click foto for description)
            </p>
            <span className="price-push">
              {priceSum.push(bag[item.id - 1].price * item.count)}
            </span>
            <p className="bag-item_price">
              ${(bag[item.id - 1].price * item.count).toFixed(2)}
            </p>
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
                <span
                  className="bag-remove_item"
                  onClick={() =>
                    this.props.removeFromBag(bag[item.id - 1].id, -1)
                  }
                >
                  <i className="far fa-trash-alt" />
                </span>
              </div>
            </div>
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
          <h1>Shopping bag</h1>
          <ul className="bag-items">{bagItems}</ul>
          <div
            className="bag-description_hidden"
            onClick={this.closeDescription}
            style={{ display: !this.state.background ? `none` : `flex` }}
          >
            <h2>{this.state.name}</h2>
            <p className="bag-description_text">{this.state.description}</p>
          </div>
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
                  disabled={this.state.disabled ? true : false}
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
            <Link
              to={`/bag/order`}
              className="bag-button_pay"
              onClick={() => this.showOrder()}
            >
              Pay
            </Link>
          </div>
          <Route path={`/bag/order`} component={bagItems} />
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
          <h1>Your order</h1>

          <div style={{ overflowX: "auto" }}>
            <table className="minimalistBlack">
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
                  <td >
                    <p>Discount:</p>{" "}
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
            </table>
          </div>
          <Link
            to="/"
            className="bag-button_pay"
            onClick={() => {
              alert("Your order has been completed!");
              this.props.removeFromBag(-1);
            }}
          >
            Ok
          </Link>
          <img className="order-image" src="/photos/order.png" alt={"order"} />
        </div>
      );
    }
  }
}
export default Bag;
