import React from "react";
import faq from "./json/faq.json";
import "./index.css";

const Faq = () => (
  <div className="faq-site">
    <img src="/photos/faq.png" alt={"faq"} />
    <h1>Frequently Asked Questions...</h1>
    <ul>
      {faq.map((item, i) => (
        <li>
          <h2>{faq[i].question}</h2>
          <p>{faq[i].answer}</p>
        </li>
      ))}
    </ul>
  </div>
);

export default Faq;
