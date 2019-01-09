import React from "react";
import "./ProductsList.css";
import Product from "../Product/Product";
import data from "../Product/data.json";

const ProductsList = (props) => (
  <div className="ProductsList">
    {data.map((detail, i) => (
        <Product
        key={i}
        {...detail}
        />
      )
    )}
  </div>
);

export default ProductsList;
