import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

class Navi extends React.Component {
  constructor() {
    super();

    this.state = {
      display: "flex",
      justifyContent: "space-around",
      style: {
        fontWeight: 'bold'
      }
    };
  }

  render() {
    return (
      <div className="app-header">
        <ul className="navigation">
          <li>
            <NavLink className="link-nav" exact to="/" activeStyle={this.state.style}>
              
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="link-nav" to="/faq" activeStyle={this.state.style}>
              FAQ
            </NavLink>
          </li>
          <li>
            <NavLink
              className="link-nav"
              to="/regulations"
              activeStyle={this.state.style}
            >
              Regulations
            </NavLink>
          </li>
          <li>
            <NavLink
              className="link-nav"
              to="/contact"
              activeStyle={this.state.style}
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
