import React from "react";
import "./Herostyle.css";
function Hero(props) {
  return (
    <div className={props.cName}>
      <img alt="HeroImg" src={props.url} />
      <div className="text_on_img">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
      </div>
    </div>
  );
}

export default Hero;
