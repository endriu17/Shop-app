import React, { Component } from "react";
import Navi from "../Navi/Navigation";
import "./Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <div className="Footer">
        <span className="footer-copyrights">All rights reserved</span>
        <Navi />
      </div>
    );
  }
}

export default Footer;
