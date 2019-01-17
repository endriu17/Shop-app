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
        price: "asc"
      }
    };

    this.sortBy = this.sortBy.bind(this);
  }

  sortBy(key) {
    console.log('sort')
    this.setState({
      data: data.sort((a, b) =>
        this.state.direction[key] === "desc"
          ? parseFloat(a[key]) - parseFloat(b[key])
          : parseFloat(b[key]) - parseFloat(a[key])
      ),
      direction: {
        [key]: this.state.direction[key] === "asc" ? "desc" : "asc"
      }
    });
  }

  render() {
    console.log(this.state.data)
    return (
      <div className="home-wrapper">
        <SortingBox dataHome={this.state.data} sortBy={this.sortBy} />
        <ProductsList dataHome={this.state.data} sortBy={this.sortBy}/>
      </div>
    );
  }
}

export default Home;
