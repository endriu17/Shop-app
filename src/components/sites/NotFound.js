import React from "react";
import "./index.css";

const NotFound = () => (
  <div className="error-site">
    <img
      className="not-found_photo"
      src={`/photos/404.png`}
      alt={`404 error`}
    />
  </div>
);

export default NotFound;
