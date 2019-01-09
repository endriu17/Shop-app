import React, { Component } from "react";
import './SortingBox.css';

class SortingBox extends React.Component {
    render() {
      return (
        <div className="SortingBox">
          <span className="sort-list">Tu będzie sortowanie 1</span>
          <span className="sort-list">Tu będzie sortowanie 2</span>
          <span className="sort-list">Tu będzie sortowanie 3</span>
        </div>
      );
    }
  }
  
export default SortingBox;