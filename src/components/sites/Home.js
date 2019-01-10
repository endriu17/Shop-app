import React, { Component } from "react";
import ProductsList from "../ProductsList/ProductsList";
import SortingBox from "../SortingBox/SortingBox";
import "./index.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  render() {
    return (
      <div className="home-wrapper">
        <SortingBox />
        <ProductsList/>
      </div>
    );
  }
}

export default Home;
