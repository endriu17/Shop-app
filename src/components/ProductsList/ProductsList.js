import React, { Component } from "react";
import "./ProductsList.css";
import Product from "../Product/Product";

class ProductsList extends React.Component {
  render() {
    return (
      <div className="ProductsList">
        <Product />
        <Product />
      </div>
    );
  }
}

export default ProductsList;