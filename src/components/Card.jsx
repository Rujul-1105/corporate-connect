import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card-main">
      <div className="designation">{props.designation}</div>
      <div className="card">
        <div className="company-photo">
          <img src={props.pic} alt="" srcset="" />
        </div>
        <div className="details">
          <h2>{props.name}</h2>
          <p>{props.phone}</p>
          <p>{props.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
