import React from "react";
import "./Company_Detail_Card.css";
import axios from "axios";

function Company_Detail_Card(props) {

  const studentUsername = localStorage.getItem('username');
  const companyUsername = props.company.username;
  const jobRole = props.company.jobRole;
  const postJob = async (e) => {
    console.log(studentUsername, companyUsername, jobRole);
    try {
      const response = await axios.post(
        'http://localhost:5001/apply-job',
        { studentUsername, companyUsername, jobRole }
      );
      const status = response.data['status'];
      const message = response.data['message'];
      alert(message);
    } catch (error) {
      console.log(error)
      console.error(error);
    }
  }

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
            <h5 className="comp-details value">{"Above " + props.company.reqCGPA}</h5>
          </div>
        </div>
        <br />
        {/* <div className="row">
          <div className="col-lg-3 col-md-12 col-sm-12">
            <h5 className="comp-details key">Technology Stack</h5>
          </div>
          <div className="col-lg-8 col-md-12 col-sm-12">
            <h5 className="comp-details value">{props.company.skillsReq}</h5>
          </div>
        </div> */}
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
              <button type="button" className="btn btn-outline-success" onClick={postJob}>
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