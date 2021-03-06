import React, { Component } from "react";
import { Link } from "react-router-dom";
import ProductsList from "../ProductsList/ProductsList";
import data from "./json/data.json";
import main from "./json/main.json";
import "./index.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      active: false
    };

    this.addData = this.addData.bind(this);
    this.clear = this.clear.bind(this);
  }

  addData(type, dir) {
      this.setState({
        data: data.sort((a, b) => {
          if (dir === "asc") {
            return a[type] < b[type] ? -1 : 0;
          } else if (dir === "desc") {
            return a[type] > b[type] ? -1 : 0;
          } else {
            return 0;
          }
        }),
        active: true
      });
  }

  clear(e) {
    setTimeout(() => {
      this.setState({
        data: main,
        active: false
      });
    }, 10);
  }

  render() {
    const { data } = this.state;
    return (
      <div className="home-wrapper">
        <div className="sortingbox">
          <span className="sort-list_header">Sort:</span>
          <Link
            to="/order/name/asc"
            onClick={() => this.addData("name", "asc")}
            className="sort-list"
          >
            <span className="name-hidden">Name</span> A - Z
          </Link>
          <Link
            to="/order/name/desc"
            onClick={() => this.addData("name", "desc")}
            className="sort-list"
          >
            <span className="name-hidden">Name</span> Z - A
          </Link>
          <Link
            to="/order/price/asc"
            onClick={() => this.addData("price", "asc")}
            className="sort-list"
          >
            Price <span className="price-hidden">ascending</span>
            <i className="fas fa-long-arrow-alt-up" />
          </Link>
          <Link
            to="/order/price/desc"
            onClick={() => this.addData("price", "desc")}
            className="sort-list"
          >
            Price <span className="price-hidden">descending</span>
            <i className="fas fa-long-arrow-alt-down" />
          </Link>
          <Link
            to="/"
            onClick={this.clear}
            style={{
              display: this.state.active ? "block" : "none"
            }}
            className="sort-list_back"
          >
            clear sorting
          </Link>
          <span className="sort-line">______________________</span>
        </div>
        <ProductsList data={data} />
      </div>
    );
  }
}

export default Home;
