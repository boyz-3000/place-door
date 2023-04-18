import React, { useState, useEffect } from "react";
import TopBar from "../../../components/top-bar/TopBar";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

import { getStudent, updateStudent } from "../../../api/student/student";

function StudentProfile() {
    const navigate = useNavigate();

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

    useEffect(() => {
        if (localStorage.getItem('isLoggedIn') === 'false') {
            navigate('/');
        }
        getStudent(username)
            .then(response => {
                const _student = response['message'];
                setStudent(prevStudent => ({
                    ...prevStudent,
                    ..._student
                }));
            })
            .catch(error => {
                console.error('Error fetching student:', error);
            });
    }, [username]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setStudent({ ...student, [name]: value });
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        await updateStudent(student);
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
                                    <input type="text" className="form-control" name="studentName" value={student.studentName} placeholder="Full Name" onChange={handleInputChange} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                <div className="input-group">
                                    <for for="exampleFormControlInput1" class="form-label">Email ID</for>
                                    <input type="text" className="form-control" name="emailID" value={student.emailID} placeholder="xyz@jklu.edu.in" onChange={handleInputChange} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                <div className="input-group">
                                    <for for="exampleFormControlInput1" class="form-label">Phone Number</for>
                                    <input type="text" className="form-control" name="phoneNo" value={student.phoneNo} placeholder="xxxxxxxxxx" onChange={handleInputChange} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
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
