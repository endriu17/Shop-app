import React from "react";
import { NavLink } from "react-router-dom";
import "./ShoppingBag.css";

const ShoppingBag = (props) => {

  return (
      <NavLink
        className="link-nav ShoppingBag"
        to="/bag"
        // activeStyle={this.state}
      >
        <span className="bag-items__icon">Bag</span>
        <span className="bag-items__number">{props.value}</span>
      </NavLink>
    );
  }

export default ShoppingBag;
