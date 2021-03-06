import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import regulations from "./json/regulations.json";
import "./index.css";

const Regulations = () => (
  <div className="regulations-site">
    <ReactCSSTransitionGroup
      transitionName="fade"
      transitionEnterTimeout={1000}
      transitionLeaveTimeout={1000}
      transitionAppear={true}
      transitionAppearTimeout={1000}
    >
      <img src="/photos/regulations.png" alt={"regulations"} />
      <h1>Regulations and terms</h1>
      <ul>
        {regulations.map((item, i) => (
          <li key={i}>
            <h2>{regulations[i].topic}</h2>
            <h3>{regulations[i].issue1}</h3>
            <p>{regulations[i].explanation1}</p>
            <h3>{regulations[i].issue2}</h3>
            <p>{regulations[i].explanation2}</p>
          </li>
        ))}
      </ul>
    </ReactCSSTransitionGroup>
  </div>
);

export default Regulations;
