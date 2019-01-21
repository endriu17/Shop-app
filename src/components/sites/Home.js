import React, { Component } from "react";
import ProductsList from "../ProductsList/ProductsList";
import SortingBox from "../SortingBox/SortingBox";
import "./index.css";
import data from "../Product/data.json";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      direction: {
        price: "asc",
        name: "asc",
        id: "desc"
      }
    };

    this.sortBy = this.sortBy.bind(this);
  }

  sortBy(key) {
    console.log('sort', key)
    this.setState({
      data: data.sort((a, b) =>
        this.state.direction[key] === "desc"
          ? parseFloat(a[key]) - parseFloat(b[key])
          : parseFloat(b[key]) - parseFloat(a[key])
      ),
      // direction: {
      //   [key]: this.state.direction[key] === "asc" ? "desc" : "asc"
      // }
    });
  }

  render() {
    return (
      <div className="home-wrapper">
        <SortingBox dataHome={this.state.data} sortBy={this.sortBy} />
        <ProductsList dataHome={this.state.data} sortBy={this.sortBy}/>
      </div>
    );
  }
}

export default Home;
