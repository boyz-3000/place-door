import React from "react";
import "./CompAppliedStudDetails.css";

function CompAppliedStudDetails(props) {
  return (
    <>
      <div className="card-details">
        <div className="alert alert-secondary" role="alert">
          <div className="row">
            <div className="col-lg-10 col-md-10 col-sm-12">
              <h5>{props.name}</h5>
              <br />
              <h6>{props.position}</h6>
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                  <h6 className="hidden-details">
                    <span className="key">Email</span>
                    <span className="value"> {props.email}</span>
                  </h6>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                  <h6 className="hidden-details">
                    <span className="key">Phone No.</span>
                    <span className="value"> {props.phone}</span>
                  </h6>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                  <h6 className="hidden-details">
                    <span className="key">Roll No.</span>
                    <span className="value"> {props.roll}</span>
                  </h6>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                  <h6 className="hidden-details">
                    <span className="key">CGPA</span>
                    <span className="value"> {props.cgpa}</span>
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-10 col-sm-12">
              <h6 className="resume">
                Resume <i className="fa-solid fa-download"></i>
              </h6>
            </div>
            <br />
            <div className="row techstack">
              <div className="col-12">
                <h6 className="techstack-head">Technology Stack</h6>
                <div className="row">
                  <div className="col-lg-10 col-md-10 col-sm-12">
                    <div className="tech-items container-fluid">
                      {
                        props.techstack.map((x) => (
                          <span className="tech-name">{x}</span>
                        ))
                      }
                    </div>


                  </div>
                  <div className="col-lg-2 col-md-2 col-sm-12"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-10 col-md-10 col-sm-12"></div>
            <div className="col-lg-2 col-md-2 col-sm-12 btn-tooltip">
              <br />
              <button type="button" className="btn btn-outline-secondary">
                Remove Applicant
              </button>
              {/* <span className="tooltiptext">Withdraw Application</span> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CompAppliedStudDetails;
