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
        name: "asc",
        price: "desc",
      }
    };

    this.sortBy = this.sortBy.bind(this);
  }

  sortBy(type, value) {
    console.log('sort', type, value)
    this.setState({
      direction: {
        [parseFloat([type])]: value, 
      }
    })
    this.setState({
      data: data.sort((a, b) =>
        this.state.direction[type] === "desc"
          ? parseFloat(a[type]) - parseFloat(b[type])
          : parseFloat(b[type]) - parseFloat(a[type])
      ),
    });
    console.log(this.state)
  }

  render() {
    console.log(this.state)
    return (
      <div className="home-wrapper">
        <SortingBox  sortBy={this.sortBy} />
        <ProductsList sortKey={this.state.direction} dataHome={this.state.data} sortBy={this.sortBy}/>
      </div>
    );
  }
}

export default Home;
