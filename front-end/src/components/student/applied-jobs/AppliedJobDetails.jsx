import React from "react";
import "./AppliedJobDetails.css";

function AppliedJobDetails(props) {
  return (
    <div className="card-details">
      <div className="alert alert-secondary" role="alert">
        <div className="row">
          <div className="col-lg-10 col-md-10 col-sm-12">
            <h5>{props.name}</h5>
            <br />
            <h6>{props.position}</h6>
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                <h6 className="hidden-details">
                  <span className="key">Package</span>
                  <span className="value"> {props.package}</span>
                </h6>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                <h6 className="hidden-details">
                  <span className="key">Stipend</span>
                  <span className="value"> {props.stipend}</span>
                </h6>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                <h6 className="hidden-details">
                  <span className="key">Mode</span>
                  <span className="value"> {props.mode}</span>
                </h6>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                <h6 className="hidden-details">
                  <span className="key">City</span>
                  <span className="value"> {props.city}</span>
                </h6>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                <h6 className="hidden-details">
                  <span className="key">Email</span>
                  <span className="value"> {props.email}</span>
                </h6>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-10 col-sm-12">
            <h6>Applied On : {props.appliedDate}</h6>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-10 col-md-10 col-sm-12"></div>
          <div className="col-lg-2 col-md-2 col-sm-12 btn-tooltip">
            <button type="button" className="btn btn-outline-secondary">
              Withdraw
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppliedJobDetails;
