import React from "react";
import { NavLink } from "react-router-dom";
import "./ShoppingBag.css";

const ShoppingBag = (props) => {

  return (
      <NavLink
        className="link-nav ShoppingBag"
        to="/bag"
        activeStyle={{fontWeight: 'bold'}}
      >
        <span className="bag-items__icon fas fa-shopping-bag"></span>
        <span className="bag-items__number">{props.value}</span>
        {console.log('odświeżone!')}
      </NavLink>
    );
  }

export default ShoppingBag;
