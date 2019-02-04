import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import faq from "./json/faq.json";
import "./index.css";

const Faq = () => (
  <div className="faq-site">
    <ReactCSSTransitionGroup
      transitionName="fade"
      transitionEnterTimeout={1000}
      transitionLeaveTimeout={1000}
      transitionAppear={true}
      transitionAppearTimeout={1000}
    >
      <img src="/photos/faq.png" alt={"faq"} />
      <h1>Frequently Asked Questions...</h1>
      <ul>
        {faq.map((item, i) => (
          <li key={i}>
            <h2>{faq[i].question}</h2>
            <p>{faq[i].answer}</p>
          </li>
        ))}
      </ul>
    </ReactCSSTransitionGroup>
  </div>
);

export default Faq;
