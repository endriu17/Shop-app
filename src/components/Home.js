import React, { Component } from "react";
import ProductsList from "./ProductsList/ProductsList";
import SortingBox from "./SortingBox/SortingBox";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: '100%',
      border: '1px solid red',
      height: '80vh',
      display: 'flex',
      justifyContent: 'space-beetwen'
    }
  }

  render() {
    return (
      <div style={this.state}>
        <SortingBox />
        <ProductsList/>
      </div>
    );
  }
}

export default Home;
