import React from "react";
// import { Link } from "react-router-dom";
import './SortingBox.css';

export default function Home(props) {
  return (
        <div className="SortingBox">
          <span  className="sort-list_header">Sort:</span>
          <span className="sort-list" onClick={() => props.sortBy("name", "asc")}>Name A - Z</span>
          <span className="sort-list" onClick={() => props.sortBy("name", "desc")}>Name Z - A</span>
          <span className="sort-list" onClick={() => props.sortBy("price", "asc")}>Price ascending</span>
          <span className="sort-list" onClick={() => props.sortBy("price", "desc")}>Price descending</span>
          <span className="sort-line">________________________</span>
        </div>
  );
}
  
// export default SortingBox;