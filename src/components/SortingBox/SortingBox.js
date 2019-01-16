import React, { Component } from "react";
import { Link } from "react-router-dom";
import './SortingBox.css';

class SortingBox extends Component {
    render() {
      return (
        <div className="SortingBox">
          <span  className="sort-list_header">Sort:</span>
          <Link to={`/`} className="sort-list">Name A - Z</Link>
          <Link to={`/`} className="sort-list">Name Z - A</Link>
          <Link to={`/`} className="sort-list">Price ascending</Link>
          <Link to={`/`} className="sort-list">Price descending</Link>
          <span className="sort-list sort-line">________________________</span>
        </div>
      );
    }
  }
  
export default SortingBox;