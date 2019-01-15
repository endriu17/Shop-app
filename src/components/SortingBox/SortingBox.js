import React, { Component } from "react";
import { Link } from "react-router-dom";
import './SortingBox.css';

class SortingBox extends Component {
    render() {
      return (
        <div className="SortingBox">
          <span  className="sort-list ">Sortuj</span>
          <Link to={`/`} className="sort-list">Tu będzie sortowanie 1</Link>
          <Link to={`/`} className="sort-list">Tu będzie sortowanie 2</Link>
          <Link to={`/`} className="sort-list">Tu będzie sortowanie 3</Link>
          <span className="sort-list sort-line">________________________</span>
        </div>
      );
    }
  }
  
export default SortingBox;