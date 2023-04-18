import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./post-jobs.css";
import "../../../components/top-bar/TopBar";
import TopBar from "../../../components/top-bar/TopBar";
import "./states_data";
import { states } from "./states_data";
import { WithContext as ReactTags } from "react-tag-input";
// import { statesDB } from "./states_data";
import axios from "axios";

const Post_jobs = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn === "false") {
      navigate("/");
    }

    const username = localStorage.getItem("username");
    console.log(username);
    async function getCompany() {
      const response = await axios.get(
        `http://localhost:5001/get-company?username=${username}`
      );
      if (response.data['message'] === null) {
        navigate("/profile");
      }
      // setCompanies(response.data);
    }

    getCompany();
  }, []);

  async function handleChangeFun(event) {
    return await event.target.value;
  }

  // const { user } = useContext(UserContext);
  const username = localStorage.getItem("username");

  // let statesDB = require('./states.json');

  const handleDelete = (i) => {
    setTags(skillsReq.filter((tag, index) => index !== i));
  };

  const handleAddition = (tag) => {
    setTags([...skillsReq, tag]);
  };

  const handleDrag = (tag, currPos, newPos) => {
    const newTags = skillsReq.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    // re-render
    setTags(newTags);
  };

  const handleTagClick = (index) => {
    // console.log("The tag at index " + index + " was clicked");
  };

  const [jobRole, setJobRole] = useState("");
  const [mode, setMode] = useState(false);
  const [lastDate, setLastDate] = useState("");
  const [state, setState] = useState([]);
  const [cityDB, setcityDB] = useState([]);
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState([]);
  const [skillsReq, setTags] = useState([]);
  const [stipend, setStipend] = useState([]);
  const [_package, setPackage] = useState([]);
  const [reqCGPA, setReqCGPA] = useState("");
  const [add_details, setAddDetails] = useState([]);

  const handleState = (e) => {
    if (e.target.value === "") {
      setState("");
      setcityDB([]);
      return;
    }
    setState(e.target.value);
    const getstate = e.target.value;
    const citydata = states.find((s) => s.state === getstate).districts;
    // const citydata =  statesDB[getstate];
    setcityDB(citydata);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5001/post-job", {
        username,
        jobRole,
        mode,
        lastDate,
        skillsReq,
        stipend,
        _package,
        reqCGPA,
      });
      const status = response.data["status"];
      const message = response.data["message"];
      alert(message);
    } catch (error) {
      console.log(error);
      console.error(error);
    }
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
              <div className="col-lg-6 jobRole">
                <label for="jobrole" className="col-form-label">
                  Job Role
                </label>
                <div className="col-lg-8">
                  <input
                    id="jobRole"
                    type="text"
                    className="form-control"
                    placeholder="Job Role"
                    onChange={(e) => setJobRole(e.target.value)}
                  />
                </div>
              </div>

              <div className="col-lg-6 mb-3">
                <label className="col-form-label col-sm-1 mode_label">
                  Mode
                </label>
                <label className="toggle">
                  <input
                    type="checkbox"
                    onChange={(e) => setMode(e.target.checked)}
                    checked={mode}
                  />
                  {/* {console.log(jobRole, mode, date, state, city, pincode, stipend, _package)} */}
                  <span className="slider"></span>
                  <span
                    className="labels"
                    data-on="Onsite"
                    data-off="WFH"
                  ></span>
                </label>
              </div>
            </div>
            <div className="row mb-3 addLine">
              <label className="col-sm-2 col-form-label">
                Last Date to Apply
              </label>
              <div className="col-sm-10 col-lg-4 ">
                <input
                  type="date"
                  className="form-control"
                  id="lastDate"
                  value={lastDate}
                  onChange={(e) => setLastDate(e.target.value)}
                />
              </div>
            </div>
            <div className="col-12">
              <label for="stipend" className="form-label">
                Skills Required
              </label>
              <ReactTags
                tags={skillsReq}
                handleDelete={handleDelete}
                handleAddition={handleAddition}
                handleDrag={handleDrag}
                handleTagClick={handleTagClick}
                inputFieldPosition="inline"
                placeholder="Enter Skills Required"
              />
            </div>
            <div className="row">
              <div className="col-lg-6 col-sm-8">
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
              <div className="col-lg-6 col-sm-8">
                <label for="inputAddress" className="form-label">
                  Package(LPA)
                </label>
                <div className="input-box">
                  <span className="prefix">₹</span>
                  <input
                    type="text"
                    placeholder="CTC"
                    id="_package"
                    value={_package}
                    onChange={(e) => setPackage(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-lg-6 col-sm-8">
                <label for="inputAddress" className="form-label">
                  Required CGPA
                </label>
                <div className="input-box">
                  <input
                    type="text"
                    placeholder="CGPA"
                    id="reqCGPA"
                    value={reqCGPA}
                    onChange={(e) => setReqCGPA(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-lg-6 col-sm-8">
                <label>Additional Details</label>
                <div className="file_input">
                  <input
                    type="file"
                    className="inputfile"
                    onChange={(e) => setAddDetails(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="col-12">
              <button
                type="submit"
                className="btn btn-primary post_job_button"
                onClick={submitHandler}
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
