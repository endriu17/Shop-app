import React, { Component } from "react";
import Navi from "../Navi/Navigation";

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
        <span className="footer-copyrights">&copy; 2019 by endriu17. All rights reserved</span>
        <Navi styles={this.state}/>
      </div>
    );
  }
}

export default Footer;
