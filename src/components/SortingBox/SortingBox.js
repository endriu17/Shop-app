import React from "react";
import { Link } from "react-router-dom";
import './SortingBox.css';

export default function Home(props) {
  return (
        <div className="SortingBox">
          <span  className="sort-list_header">Sort:</span>
          <Link to={`/`} className="sort-list" onClick={() => props.sortBy("name")}>Name A - Z</Link>
          <Link to={`/`} className="sort-list" onClick={() => props.sortBy("name")}>Name Z - A</Link>
          <Link to={`/`} className="sort-list" onClick={() => props.sortBy("price")}>Price ascending</Link>
          <Link to={`/`} className="sort-list" onClick={() => props.sortBy("price")}>Price descending</Link>
          <span className="sort-list sort-line">________________________</span>
        </div>
  );
}
  
// export default SortingBox;