import React, { Component } from "react";
import { Link } from "react-router-dom";
import ProductsList from "../ProductsList/ProductsList";
import "../SortingBox/SortingBox.css";
import data from "../Product/data.json"
import "./index.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
    }
    this.addData = this.addData.bind(this);
  }

  addData(type, dir){
    this.setState({
      data: data.sort((a, b) => {
        if (dir === "asc") {
          return a[type] < b[type] ? -1 : 0;
        } else if (dir === "desc") {
          return a[type] > b[type] ? -1 : 0;
        } else {
          return 0;
        }
      })
    })
  }

  render() {
    return (
      <div className="home-wrapper">
        <div className="SortingBox">
          <span className="sort-list_header">Sort:</span>
          <Link to="/order/name/asc" onClick={()=> (this.addData('name', 'asc'))} className="sort-list">
            Name A - Z
          </Link>
          <Link to="/order/name/desc" onClick={()=> (this.addData('name', 'desc'))} className="sort-list">
            Name Z - A
          </Link>
          <Link to="/order/price/asc" onClick={()=> (this.addData('price', 'asc'))} className="sort-list">
            Price ascending
          </Link>
          <Link to="/order/price/desc" onClick={()=> (this.addData('price', 'desc'))} className="sort-list">
            Price descending
          </Link>
          <span className="sort-line">________________________</span>
        </div>
        <ProductsList {...this.state} />
      </div>
    );
  }
}

export default Home;
