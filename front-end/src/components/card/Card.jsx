import React from "react";
import "./Card.css";

import Modal from "../modal/Modal";
import Company_Detail_Card from "../company/company-details-card/Company_Detail_Card";

function Card(props) {
  console.log(props);
  const [show, setShow] = React.useState(false);
  return (
    <div>
      <div class="flip-card" onClick={() => setShow(true)}>
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <h5 className="card-title">{props.company.companyName}</h5>
            <div className="email">
              <h6 className="card-subtitle mb-2 ">{props.company.jobRole}</h6>
            </div>
          </div>
          <div className="flip-card-back">
            <div className="card-border">
              <p className="card-text">
                <ul>
                  <li>
                    <i className="fa-solid fa-briefcase"></i>Email :{" "}
                    {props.company.emailID}
                  </li>
                  <li>
                    <i className="fa-solid fa-clock"></i>Last Date to apply :{" "}
                    {props.company.lastDate}
                  </li>
                  <li>
                    <i className="fa-solid fa-building"></i>Mode : {props.company.mode}
                  </li>
                  <li>
                    <i className="fa-solid fa-location-dot"></i>Location :{" "}
                    {props.company.state + ", " + props.company.city}
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Modal
        show={show}
        onClose={() => setShow(false)}
        height={550}
        width={900}
      >
        < Company_Detail_Card company={props.company}/>
      </Modal>
    </div>
  );
}

export default Card;
