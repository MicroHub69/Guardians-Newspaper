import React from "react";
import "./style.css";

export default function App(props) {
  return (
    <div className="container main_blog">
      <div className="first_blog num1">
        <img src={props.main_img} className="main_pic" />

        <div className="component1">
          <label>Life</label>
          <h3>{props.title}</h3>

          <p>{props.description}</p>

          <div className="by">
            <img src={props.user} alt="" />
            <div className="name">
              <h4>
                By: <span>{props.username}</span>
              </h4>
              <i>{props.time}</i>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}
