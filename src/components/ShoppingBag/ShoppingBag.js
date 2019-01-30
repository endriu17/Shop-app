import React from "react";
import { NavLink } from "react-router-dom";

const ShoppingBag = (props) => {

  return (
      <NavLink
        className="link-nav shoppingBag"
        to="/bag"
        activeStyle={{fontWeight: 'bold'}}
      >
        <span className="bag-items__icon fas fa-shopping-bag"></span>
        <span className="bag-items__number">{props.value}</span>
      </NavLink>
    );
  }

export default ShoppingBag;
