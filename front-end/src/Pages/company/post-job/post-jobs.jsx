import React, { useState } from "react";
import "./post-jobs.css";
import "../../../components/top-bar/TopBar";
import TopBar from "../../../components/top-bar/TopBar";
import "./states_data";
import { states } from "./states_data";
import Multiselect from "multiselect-react-dropdown";
import { WithContext as ReactTags} from 'react-tag-input';
import { COUNTRIES } from './countries';


const suggestions = COUNTRIES.map(country => {
  return {
    id: country,
    text: country
  };
});

const KeyCodes = {
  comma: 188,
  enter: 13
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

const Post_jobs = () => {

  const [tags, setTags] = React.useState([
    { id: 'India', text: 'India' },
    { id: 'Pakistan', text: 'Pakistan' },
  ]);

  const handleDelete = i => {
    setTags(tags.filter((tag, index) => index !== i));
  };

  const handleAddition = tag => {
    setTags([...tags, tag]);
  };

  const handleDrag = (tag, currPos, newPos) => {
    const newTags = tags.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    // re-render
    setTags(newTags);
  };

  const handleTagClick = index => {
    console.log('The tag at index ' + index + ' was clicked');
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

  const submit=()=>{
    console.log(_package);
    console.log(mode);
  }


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
                  id="job_role"
                  type="text"
                  className="form-control"
                  placeholder="Job Role"
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
                    name="radio"
                    value="option_1"
                    checked={selectedOption === "option1"}
                    onChange={handleOptionChange}
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
                    name="radio"
                    value="option_2"
                    checked={selectedOption === "option2"}
                    onChange={handleOptionChange}
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
                <input type="date" className="form-control" id="date" value={date} onChange={(e) => setDate(e.target.value)}/>
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
              <input type="text" className="form-control" id="pincode" onChange={(e) => setPincode(e.target.value)}/>
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
                // onChange={(e) => setSkill(e.target.value)}
              />
            </div>

            <div className="col-sm-8">
              <label for="stipend" className="form-label">
                Stipend
              </label>
              <div className="input-box">
                <span className="prefix">₹</span>
                <input type="text" placeholder="Stipend" id="stipend" onChange={(e) => setStipend(e.target.value)}/>
              </div>
            </div>

            <div className="col-sm-8">
              <label for="inputAddress" className="form-label">
                Package(LPA)
              </label>
              <div className="input-box">
                <span className="prefix">₹</span>
                <input type="text" placeholder="Package" id="package" value={_package} onChange={(e) => setPackage(e.target.value)}/>
              </div>
            </div>
            <div className="col-sm-8">
              <label>Additional Details</label>
              <div className="file_input">
                <input type="file" className="inputfile" onChange={(e) => setAddDetails(e.target.value)}/>
              </div>
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-primary post_job_button" onClick={submit()}>
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

      <div className="testing">
        <div>
          <ReactTags
            classNames={{remove: 'remove_tags'}}
            tags={tags}
            delimiters={delimiters}
            handleDelete={handleDelete}
            handleAddition={handleAddition}
            handleDrag={handleDrag}
            handleTagClick={handleTagClick}
            inputFieldPosition="bottom"
            autocomplete
          />
        </div>
      </div>
      <br />
      <br />
    </>
  );
};

export default Post_jobs;
