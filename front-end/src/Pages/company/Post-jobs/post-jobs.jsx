import React, { useState } from "react";
import "./post-jobs.css";
import "../../../components/top-bar/TopBar";
import TopBar from "../../../components/top-bar/TopBar";
import "./states_data";
import { states } from "./states_data";
import Multiselect from "multiselect-react-dropdown";

const Post_jobs = () => {
  const [city, setcity] = useState([]);
  const handlestate = (e) => {
    const getstate = e.target.value;
    const citydata = states.find((s) => s.state === getstate).districts;
    setcity(citydata);
  };

  const [options, setOptions]=useState([]);

  return (
    <>
      <TopBar />
      <div className="main">
        <div className="container main_card">
          <div className="container form_title">Post Job</div>
          <hr className="job_form_hr" />
          <form className="row g-3 post-form">
            <div className="row job_role">
              <label for="jobrole" className="col-sm-1 col-form-label">
                Job Role
              </label>
              <div className="col-sm-10 col-lg-4 ">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Job Role"
                  id="job_role"
                />
              </div>
            </div>
            <fieldset className="row mb-3">
              <label className="col-form-label col-sm-1 pt-0">Mode</label>
              <div className="col-sm-10">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="onsite"
                    value="onsite"
                    name="radio"
                  />
                  <label className="form-check-label" for="onsite">
                    Onsite
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="WFH"
                    value="WFH"
                    name="radio"
                  />
                  <label className="form-check-label" for="WFH">
                    WFH
                  </label>
                </div>
              </div>
            </fieldset>
            <div className="row mb-3">
              <label className="col-sm-2 col-form-label">
                Last Date to Apply
              </label>
              <div className="col-sm-10 col-lg-4 ">
                <input type="date" className="form-control" id="date" />
              </div>
            </div>
            <div className="col-md-4">
              <label for="inputState" className="form-label">
                State
              </label>
              <select
                id="inputState"
                className="form-select"
                onChange={(e) => handlestate(e)}
              >
                <option value="">--Select State--</option>
                {states.map((s, index) => (
                  <option value={s.state} key={index}>
                    {s.state}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-md-4">
              <label for="inputState" className="form-label">
                City
              </label>
              <select id="inputCity" className="form-select">
                <option selected>--Select City--</option>
                {city.map((c, index) => (
                  <option value={c} key={index}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-md-2">
              <label for="pincode" className="form-label">
                Pin Code
              </label>
              <input type="text" className="form-control" id="pincode" />
            </div>
            <div className="col-12">
              <label for="skills" className="form-label">
                Skills
              </label>
              <input
                type="text"
                className="form-control"
                id="skills"
                placeholder="Skills"
              />
            </div>

            <div className="col-sm-8">
              <label for="stipend" className="form-label">
                Stipend
              </label>
              <div className="input-box">
                <span className="prefix">₹</span>
                <input type="text" placeholder="Stipend" id="stipend" />
              </div>
            </div>

            <div className="col-sm-8">
              <label for="inputAddress" className="form-label">
                Package(LPA)
              </label>
              <div className="input-box">
                <span className="prefix">₹</span>
                <input type="text" placeholder="Package" id="package" />
              </div>
            </div>
            <div className="col-sm-8">
              <label>Additional Details</label>
              <div className="file_input">
                <input type="file" className="inputfile" />
              </div>
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-primary post_job_button">
                Post Job
              </button>
            </div>
{/* 
            <>
              <Multiselect isObject={false}
              options={["Option 1", "Option 2"]}/>
            </> */}

            {/* <>
              
              <select name="select" multiple multiselect-search="true" multiselect-search-all="true">
                  <option>React</option>
                  <option>Js</option>
                  <option>HTML</option>
                  <option>C++</option>
              </select>
            </> */}
          </form>
        </div>
      </div>
    </>
  );
};

export default Post_jobs;
