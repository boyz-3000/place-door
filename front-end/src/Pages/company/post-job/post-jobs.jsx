import React, { useState } from "react";
import "./post-jobs.css";
import "../../../components/top-bar/TopBar";
import TopBar from "../../../components/top-bar/TopBar";
import "./states_data";
import { states } from "./states_data";
import { WithContext as ReactTags } from "react-tag-input";

const Post_jobs = () => {
  const [tags, setTags] = React.useState([]);

  const handleDelete = (i) => {
    setTags(tags.filter((tag, index) => index !== i));
  };

  const handleAddition = (tag) => {
    setTags([...tags, tag]);
  };

  const handleDrag = (tag, currPos, newPos) => {
    const newTags = tags.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    // re-render
    setTags(newTags);
  };

  const handleTagClick = (index) => {
    console.log("The tag at index " + index + " was clicked");
  };

  const [job_role, setJobRole] = useState([]);
  const [city, setcity] = useState([]);
  const [mode, setMode] = useState([]);
  const [date, setDate] = useState([]);
  const [options, setOptions] = useState([]);
  const [pincode, setPincode] = useState([]);
  const [stipend, setStipend] = useState([]);
  const [_package, setPackage] = useState([]);
  const [add_details, setAddDetails] = useState([]);

  const [selectedOption, setSelectedOption] = useState("option1");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleState = (e) => {
    const getstate = e.target.value;
    const citydata = states.find((s) => s.state === getstate).districts;
    setcity(citydata);
  };

  const submit = () => {
    console.log(_package);
    console.log(mode);
  };

  return (
    <>
      <TopBar />
      <div className="main">
        <div className="container main_card">
          <div className="container form_title">Post Job</div>
          <hr className="job_form_hr" />
          <form className="row g-3 post-form">
            <div className="row first-div">
              <div className="col-lg-6 job_role">
                <label for="jobrole" className="col-form-label">
                  Job Role
                </label>
                <div className="col-lg-8">
                  <input
                    id="job_role"
                    type="text"
                    className="form-control"
                    placeholder="Job Role"
                    onChange={(e) => setJobRole(e.target.value)}
                  />
                </div>
              </div>

              <div className="col-lg-6 mb-3">
                <label className="col-form-label col-sm-1 mode_label">Mode</label>
                  <label className="toggle">
                    <input type="checkbox"/>
                    <span className="slider"></span>
                    <span className="labels" data-on="Onsite" data-off="WFH"></span>
                  </label>
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-2 col-form-label">
                Last Date to Apply
              </label>
              <div className="col-sm-10 col-lg-4 ">
                <input
                  type="date"
                  className="form-control"
                  id="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
            </div>
            <div className="col-md-4">
              <label for="inputState" className="form-label">
                State
              </label>
              <select
                id="inputState"
                className="form-select"
                onChange={(e) => handleState(e)}
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
              <input
                type="text"
                className="form-control"
                id="pincode"
                onChange={(e) => setPincode(e.target.value)}
              />
            </div>
            <div className="col-12">
              <label for="stipend" className="form-label">
                Skills Required
              </label>
              <ReactTags
                tags={tags}
                handleDelete={handleDelete}
                handleAddition={handleAddition}
                handleDrag={handleDrag}
                handleTagClick={handleTagClick}
                inputFieldPosition="inline"
                placeholder="Enter Skills Required"
              />
            </div>

            <div className="col-sm-8">
              <label for="stipend" className="form-label">
                Stipend
              </label>
              <div className="input-box">
                <span className="prefix">₹</span>
                <input
                  type="text"
                  placeholder="Stipend"
                  id="stipend"
                  onChange={(e) => setStipend(e.target.value)}
                />
              </div>
            </div>

            <div className="col-sm-8">
              <label for="inputAddress" className="form-label">
                Package(LPA)
              </label>
              <div className="input-box">
                <span className="prefix">₹</span>
                <input
                  type="text"
                  placeholder="Package"
                  id="package"
                  value={_package}
                  onChange={(e) => setPackage(e.target.value)}
                />
              </div>
            </div>
            <div className="col-sm-8">
              <label>Additional Details</label>
              <div className="file_input">
                <input
                  type="file"
                  className="inputfile"
                  onChange={(e) => setAddDetails(e.target.value)}
                />
              </div>
            </div>
            <div className="col-12">
              <button
                type="submit"
                className="btn btn-primary post_job_button"
                onClick={submit()}
              >
                Post Job
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Post_jobs;
