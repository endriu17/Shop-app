import React from "react";
import regulations from "./json/regulations.json"
import "./index.css";

const Regulations = () => (
  <div className="regulations-site">
    <img src="/photos/regulations.png" alt={"regulations"} />
    <h1>Regulations and terms</h1>
    <ul>
      {regulations.map((item, i) => (
        <li>
          <h2>{regulations[i].topic}</h2>
          <h3>{regulations[i].issue1}</h3>
          <p>{regulations[i].explanation1}</p>
          <h3>{regulations[i].issue2}</h3>
          <p>{regulations[i].explanation2}</p>
        </li>
      ))}
    </ul>
  </div>
);

export default Regulations;
