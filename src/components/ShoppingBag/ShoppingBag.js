import React from "react";
import { NavLink } from "react-router-dom";
import MediaQuery from "react-responsive";

const ShoppingBag = props => {
  return (
    <NavLink
      className="link-nav shoppingbag"
      to="/bag"
      activeStyle={{ fontWeight: "bold" }}
    >
      <MediaQuery query="(min-width: 861px)">
        <span className="bag-items_icon fas fa-shopping-bag" />
        <span className="bag-items_number_1">{props.value}</span>
      </MediaQuery>
      <MediaQuery query="(max-width: 860px)">
        <span className="bag-items_icon fas fa-shopping-bag fa-2x" style={{}} />
        <span className="bag-items_number_2">{props.value}</span>
      </MediaQuery>
    </NavLink>
  );
};

export default ShoppingBag;
