import React from "react";
import "./Company_Detail_Card.css";


function Company_Detail_Card(props) {
    return (
        <div className="job-modal">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <h1 className="comp-name">Company</h1>
            </div>

            <br />
            <div className="row">
              <div className="col-lg-3 col-md-12 col-sm-12">
                <h5 className="comp-details key">Address</h5>
              </div>
              <div className="col-lg-8 col-md-12 col-sm-12">
                <h5 className="comp-details value">
                  Jagatpura NRI Road Jaipur
                </h5>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-lg-3 col-md-12 col-sm-12">
                <h5 className="comp-details key">Job Profile</h5>
              </div>
              <div className="col-lg-8 col-md-12 col-sm-12">
                <h5 className="comp-details value">Flutter Developer</h5>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-lg-3 col-md-12 col-sm-12">
                <h5 className="comp-details key">Package</h5>
              </div>
              <div className="col-lg-8 col-md-12 col-sm-12">
                <h5 className="comp-details value">8 LPA </h5>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-lg-3 col-md-12 col-sm-12">
                <h5 className="comp-details key">Required CGPA</h5>
              </div>
              <div className="col-lg-8 col-md-12 col-sm-12">
                <h5 className="comp-details value">Above 7.5</h5>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-lg-3 col-md-12 col-sm-12">
                <h5 className="comp-details key">Technology Stack</h5>
              </div>
              <div className="col-lg-8 col-md-12 col-sm-12">
                <h5 className="comp-details value">Kotlin, Java, DSA</h5>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-lg-3 col-md-12 col-sm-12">
                <h5 className="comp-details key">Last Date to Appy</h5>
              </div>
              <div className="col-lg-8 col-md-12 col-sm-12">
                <h5 className="comp-details value">20th April 2023</h5>
              </div>
            </div>

            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="row">
                <div className="col-lg-10 col-md-10 col-sm-10"></div>
                <div className="col-lg-2 col-md-2 col-sm-2">
                  <button type="button" className="btn btn-outline-success">
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Company_Detail_Card;