import React from "react";
import { NavLink } from "react-router-dom";

class Navi extends React.Component {
  constructor() {
    super();

    this.state = {
      display: "flex",
      justifyContent: "space-around",
      style: {
        fontWeight: "bold"
      }
    };
  }

  render() {
    return (
      <div className="app-header">
        <ul className="navigation">
          <li>
            <NavLink className="link-nav" exact to="/" activeStyle={{fontWeight: 'bold'}}>

              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="link-nav" to="/faq" activeStyle={{fontWeight: 'bold'}}>
              FAQ
            </NavLink>
          </li>
          <li>
            <NavLink
              className="link-nav"
              to="/regulations"
              activeStyle={{fontWeight: 'bold'}}
            >
              Regulations
            </NavLink>
          </li>
          <li>
            <NavLink
              className="link-nav"
              to="/contact"
              activeStyle={{fontWeight: 'bold'}}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      // <div className="app-header_hidden">
      //   <i class="fas fa-bars fa-3x" />
      //   <i
      //     class="fas fa-times fa-3x"
      //     style={{
      //       visibility: window.matchMedia("(max-width: 768px)").matches
      //         ? "show"
      //         : "hidden"
      //     }}
      //   />
      //   <ul className="navigation_hidden">
      //     <li>
      //       <NavLink
      //         className="link-nav_hidden"
      //         exact
      //         to="/"
      //         activeStyle={{ fontWeight: "bold" }}
      //       >
      //         Home
      //       </NavLink>
      //     </li>
      //     <li>
      //       <NavLink
      //         className="link-nav_hidden"
      //         to="/faq"
      //         activeStyle={{ fontWeight: "bold" }}
      //       >
      //         FAQ
      //       </NavLink>
      //     </li>
      //     <li>
      //       <NavLink
      //         className="link-nav_hidden"
      //         to="/regulations"
      //         activeStyle={{ fontWeight: "bold" }}
      //       >
      //         Regulations
      //       </NavLink>
      //     </li>
      //     <li>
      //       <NavLink
      //         className="link-nav_hidden"
      //         to="/contact"
      //         activeStyle={{ fontWeight: "bold" }}
      //       >
      //         Contact
      //       </NavLink>
      //     </li>
      //   </ul>
      // </div>
    );
  }
}
export default Navi;
