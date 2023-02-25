import React from "react";
import "./Card.css";

const Click = () => {
  return alert("Clicked on Card.");
};

function Card(props) {
  return (
    <div>
      <div class="flip-card" onClick={Click}>
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <h5 className="card-title">{props.name}</h5>
            <div className="email">
              <h6 className="card-subtitle mb-2 ">{props.email}</h6>
            </div>
          </div>
          <div className="flip-card-back">
            <div className="card-border">
              <p className="card-text">
                <ul>
                  <li><i className="fa-solid fa-briefcase"></i>Posting : {props.posting}</li>
                  <li><i className="fa-solid fa-clock"></i>Last Date to apply : {props.lastDate}</li>
                  <li><i className="fa-solid fa-building"></i>Mode : {props.mode}</li>
                  <li><i className="fa-solid fa-location-dot"></i>Location : {props.location}</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
