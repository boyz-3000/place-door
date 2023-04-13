import React from "react";
import "./Company_Detail_Card.css";


function Company_Detail_Card(props) {
  {console.log(props.company.skillsReq)}
  return (
    <div className="job-modal">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <h1 className="comp-name">{props.company.companyName}</h1>
        </div>

        <br />
        <div className="row">
          <div className="col-lg-3 col-md-12 col-sm-12">
            <h5 className="comp-details key">Address</h5>
          </div>
          <div className="col-lg-8 col-md-12 col-sm-12">
            <h5 className="comp-details value">
              {props.company.state + ", " + props.company.city}
            </h5>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-lg-3 col-md-12 col-sm-12">
            <h5 className="comp-details key">Job Profile</h5>
          </div>
          <div className="col-lg-8 col-md-12 col-sm-12">
            <h5 className="comp-details value">{props.company.jobRole}</h5>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-lg-3 col-md-12 col-sm-12">
            <h5 className="comp-details key">Package</h5>
          </div>
          <div className="col-lg-8 col-md-12 col-sm-12">
            <h5 className="comp-details value">{props.company._package + " LPA"}</h5>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-lg-3 col-md-12 col-sm-12">
            <h5 className="comp-details key">Required CGPA</h5>
          </div>
          <div className="col-lg-8 col-md-12 col-sm-12">
            <h5 className="comp-details value">{"Above " + props.company._package}</h5>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-lg-3 col-md-12 col-sm-12">
            <h5 className="comp-details key">Technology Stack</h5>
          </div>
          <div className="col-lg-8 col-md-12 col-sm-12">
            <h5 className="comp-details value">{props.company.skillsReq}</h5>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-lg-3 col-md-12 col-sm-12">
            <h5 className="comp-details key">Last Date to Appy</h5>
          </div>
          <div className="col-lg-8 col-md-12 col-sm-12">
            <h5 className="comp-details value">{props.company.lastDate}</h5>
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