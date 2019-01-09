import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

class Navi extends React.Component {
  constructor() {
    super();

    this.state = {
      display: "flex",
      justifyContent: "space-around"
    };
  }

  render() {
    return (
      <div className="app-header">
        <ul className="navigation">
          <li>
            <NavLink className="link-nav" exact to="/">
              {/* // activeStyle={this.state} */}
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="link-nav" to="/faq">
              FAQ
            </NavLink>
          </li>
          <li>
            <NavLink
              className="link-nav"
              to="/regulations"
              // activeStyle={this.state}
            >
              Regulations
            </NavLink>
          </li>
          <li>
            <NavLink
              className="link-nav"
              to="/contact"
              // activeStyle={this.state}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}
export default Navi;
