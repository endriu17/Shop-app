import React from "react";
import { NavLink } from "react-router-dom";
import "./ShoppingBag.css";

class ShoppingBag extends React.Component {
  render() {
    return (
      <NavLink
        className="link-nav ShoppingBag"
        to="/bag"
        // activeStyle={this.state}
      >
        <span>Bag</span>
      </NavLink>
    );
  }
}

export default ShoppingBag;
