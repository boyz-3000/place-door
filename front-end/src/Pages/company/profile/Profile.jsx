import React, { useState, useContext, useEffect } from "react";
import TopBar from "../../../components/top-bar/TopBar";
import "./Profile.css";
import axios from "axios";

import "./states_data";
import { states } from "./states_data";

function CompanyProfile() {

    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const username = localStorage.getItem('username');

    const [state, setState] = useState([]);
    const [cityDB, setcityDB] = useState([]);
    const [city, setCity] = useState("");

    const [company, setCompany] = useState({
        username: username,
        companyName: "",
        emailID: "",
        city: "",
        state: "",
        contactNo: "",
    });

    const handleStateOrCity = (event) => {
        const { name, value } = event.target;
        if (value === "") {
            setCompany({ ...company, [name]: "" });
            setcityDB([]);
            return;
        }
        setCompany({ ...company, [name]: value });
        const citydata = states.find((s) => s.state === value).districts;
        // const citydata =  statesDB[getstate];
        setcityDB(citydata);
    };

    console.log(username);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCompany({ ...company, [name]: value });
        console.log("state" +" " +state);
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        console.log(company);

        const values = Object.values(company);

        if (values.some(value => value === "")) {
            alert("Please fill in all the fields");
            return;
        }

        try {

            const response = await axios.post(
                `http://localhost:5001/add-company`,
                company
            );

            console.log(response.data);
            alert("Company profile updated successfully!");
        } catch (error) {
            console.log('ero')
            console.error(error);
        }
    };

    return (
        <>
            {/* {console.log(userName)} */}
            <TopBar />
            <div>
                <header>
                    <h3>Profile</h3>
                    <hr />
                </header>

                <div className="row" id="profile">
                    <div className="col-lg-3 col-md-3 col-sm-12" id="profile-icon-div">
                        <i class="fa-regular fa-user" id="profile-icon"></i>
                    </div>

                    <form className="col-lg-9 col-md-9 col-sm-12" id="profile-details">

                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                <div className="input-group">
                                    <for for="exampleFormControlInput1" class="form-label">Company Name</for>
                                    <input type="text" className="form-control" name="companyName" value={company.companyName} onChange={handleInputChange} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                <div className="input-group">
                                    <for for="exampleFormControlInput1" class="form-label">Email ID</for>
                                    <input type="text" className="form-control" name="emailID" value={company.emailID} onChange={handleInputChange} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
                                </div>
                            </div>
                        </div>

                        <div className="row drop-down-row">
                            <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                <div className="input-group">
                                    <div className="state_dropdown">
                                        <label for="exampleFormControlInput1" className="form-label dd-label">
                                            State
                                        </label>
                                        <select
                                            id="inputState"
                                            className="form-select"
                                            name="state"
                                            // onChange={(e) => handleState(e)}
                                            onChange={handleStateOrCity}
                                        >
                                            <option value="">--Select State--</option>
                                            {states.map((s, index) => (
                                                <option value={s.state} key={index}>
                                                    {s.state}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                <div className="input-group">
                                    <div className="city_dropdown">
                                        <label for="exampleFormControlInput1" className="form-label dd-label">
                                            City
                                        </label>
                                        <select id="inputCity" className="form-select" name="city" onChange={handleStateOrCity}>
                                            <option selected>--Select City--</option>
                                            {cityDB.map((c, index) => (
                                                <option value={c} key={index}>
                                                    {c}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                <div className="input-group">
                                    <for for="exampleFormControlInput1" class="form-label">Contact No.</for>
                                    <input type="text" className="form-control" name="contactNo" value={company.contactNo} onChange={handleInputChange} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
                                </div>
                            </div>
                            {/* <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                <div className="input-group">
                                    <for for="exampleFormControlInput1" class="form-label">Department</for>
                                    <input type="text" className="form-control" name="department" value={student.department} onChange={handleInputChange} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
                                </div>
                            </div> */}
                        </div>

                        <div className="button-div">
                            <button type="button" class="btn btn-primary" onClick={submitHandler}>Update</button>
                        </div>
                    </form>

                </div>
            </div>
        </>
    );
}

export default CompanyProfile;
