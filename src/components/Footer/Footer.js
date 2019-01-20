import React, { Component } from "react";
import Navi from "../Navi/Navigation";
import "./Footer.css";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "red !important",
    };
  }
  render() {
    return (
      <div className="footer">
        <span className="footer-copyrights">&copy; Copyrights: endriu17</span>
        <Navi styles={this.state}/>
      </div>
    );
  }
}

export default Footer;
