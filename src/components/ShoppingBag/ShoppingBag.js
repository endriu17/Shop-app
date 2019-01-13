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
        <span>Bag ({props.value})</span>
      </NavLink>
    );
  }

export default ShoppingBag;
