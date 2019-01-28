import React from "react";
import { Link } from "react-router-dom";
import "./SortingBox.css";

const SortingBox = (props) => {

  return (
    <div className="SortingBox">
      <span className="sort-list_header">Sort:</span>
      <Link to="/order/name/asc" className="sort-list">
        Name A - Z
      </Link>
      <Link to="/order/name/desc" className="sort-list">
        Name Z - A
      </Link>
      <Link to="/order/price/asc" className="sort-list">
        Price ascending
      </Link>
      <Link to="/order/price/desc" className="sort-list">
        Price descending
      </Link>
      <span className="sort-line">________________________</span>
    </div>
    );
  }
export default SortingBox;
