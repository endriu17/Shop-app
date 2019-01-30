import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import MediaQuery from "react-responsive";

class Navi extends Component {
  constructor(props) {
    super(props);

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);

    this.state = {
      show: false,
      menu: true
      // hidden:
    };
  }

  showMenu() {
    this.setState({
      show: true,
      menu: false
    });
    document.querySelector(".navi-logo").style.display = "none";
  }

  closeMenu() {
    this.setState({
      show: false,
      menu: true
    });
    document.querySelector(".navi-logo").style.display = "flex";
  }

  render() {
    return (
      <div>
        <MediaQuery query="(max-width: 860px)">
          <div className="app-header_hidden">
            <ul
              style={{ display: !this.state.show ? "none" : "block" }}
              className="navigation_hidden"
            >
              <li>
                <NavLink
                  className="link-nav_hidden"
                  exact
                  to="/"
                  activeStyle={{ fontWeight: "bold" }}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="link-nav_hidden"
                  to="/faq"
                  activeStyle={{ fontWeight: "bold" }}
                >
                  FAQ
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="link-nav_hidden"
                  to="/regulations"
                  activeStyle={{ fontWeight: "bold" }}
                >
                  Regulations
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="link-nav_hidden"
                  to="/contact"
                  activeStyle={{ fontWeight: "bold" }}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
            <i
              className="nav-hamburger_hidden fas fa-bars fa-3x"
              style={{ display: !this.state.menu ? "none" : "flex" }}
              onClick={this.showMenu}
            />
            <i
              className="nav-close_hidden fas fa-times fa-3x"
              style={{ display: this.state.menu ? "none" : "flex" }}
              onClick={this.closeMenu}
            />
          </div>
        </MediaQuery>
        <MediaQuery query="(min-width: 861px)">
          <div className="app-header">
            <ul className="navigation">
              <li>
                <NavLink
                  className="link-nav"
                  exact
                  to="/"
                  activeStyle={{ fontWeight: "bold" }}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="link-nav"
                  to="/faq"
                  activeStyle={{ fontWeight: "bold" }}
                >
                  FAQ
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="link-nav"
                  to="/regulations"
                  activeStyle={{ fontWeight: "bold" }}
                >
                  Regulations
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="link-nav"
                  to="/contact"
                  activeStyle={{ fontWeight: "bold" }}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </MediaQuery>
      </div>
    );
  }
}

export default Navi;
