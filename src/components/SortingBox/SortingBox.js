import React, { Component } from "react";
import './SortingBox.css';

class SortingBox extends Component {
    render() {
      return (
        <div className="SortingBox">
          <span className="sort-list ">Sortuj</span>
          <span className="sort-list">Tu będzie sortowanie 1</span>
          <span className="sort-list">Tu będzie sortowanie 2</span>
          <span className="sort-list">Tu będzie sortowanie 3</span>
          <span className="sort-list sort-line">________________________</span>
        </div>
      );
    }
  }
  
export default SortingBox;