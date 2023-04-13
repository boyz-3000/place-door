import React, { useState, useContext } from "react";
import TopBar from "../../../components/top-bar/TopBar";
import "./Profile.css";
import axios from "axios";

function StudentProfile() {

    const username = localStorage.getItem('username');

    const [student, setStudent] = useState({
        username: username,
        studentName: "",
        emailID: "",
        phoneNo: "",
        rollNo: "",
        department: "",
        stream: "",
        cgpa: "",
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setStudent({ ...student, [name]: value });
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            
            const response = await axios.post(
                `http://localhost:5001/update-student`,
                student
            );
            alert("Student profile updated successfully!");
        } catch (error) {
            console.error(error);
            // setLoggedIn(false);
        }
    };

    return (
        <>
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
                                    <for for="exampleFormControlInput1" class="form-label">Name</for>
                                    <input type="text" className="form-control" name="studentName" value={student.name} placeholder="Full Name" onChange={handleInputChange} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                <div className="input-group">
                                    <for for="exampleFormControlInput1" class="form-label">Email ID</for>
                                    <input type="text" className="form-control" name="emailID" value={student.email} placeholder="xyz@jklu.edu.in" onChange={handleInputChange} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                <div className="input-group">
                                    <for for="exampleFormControlInput1" class="form-label">Phone Number</for>
                                    <input type="text" className="form-control" name="phoneNo" value={student.phone} placeholder="xxxxxxxxxx" onChange={handleInputChange} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                <div className="input-group">
                                    <for for="exampleFormControlInput1" class="form-label">Roll Number</for>
                                    <input type="text" className="form-control" name="rollNo" value={student.rollNo} placeholder="e.g. 2020BTechCSE039" onChange={handleInputChange} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                <div className="input-group">
                                    <for for="exampleFormControlInput1" class="form-label">Department</for>
                                    <input type="text" className="form-control" name="department" value={student.department} placeholder="e.g. BTech" onChange={handleInputChange} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                <div className="input-group">
                                    <for for="exampleFormControlInput1" class="form-label">Stream</for>
                                    <input type="text" className="form-control" name="stream" value={student.stream} placeholder="e.g. CSE" onChange={handleInputChange} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                <div className="input-group">
                                    <for for="exampleFormControlInput1" class="form-label">CGPA</for>
                                    <input type="text" className="form-control" name="cgpa" value={student.cgpa} placeholder="e.g. 7.8" onChange={handleInputChange} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
                                </div>
                            </div>
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

export default StudentProfile;
