import React, { useState, useContext } from "react";
import TopBar from "../../components/top-bar/TopBar";
import "./Profile.css";
import axios from "axios";

import UserContext from "../../UserContext";
import { useNavigate } from "react-router-dom";

function Profile() {

    const { userName } = useContext(UserContext);
    const { loggedIn, setLoggedIn } = useContext(UserContext);

    const [student, setStudent] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        rollNo: "",
        department: "",
    });

    // const [firstName, setFirstName] = useState("");
    // const [lastName, setLastName] = useState("");
    // const [email, setEmail] = useState("");
    // const [phone, setPhone] = useState("");
    // const [rollNo, setRollNo] = useState("");
    // const [department, setDepartment] = useState("");

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setStudent({ ...student, [name]: value });
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        console.log(student);

        try {
            //   const response = await axios.put('http://localhost:5001/update-student', {
            //     // method: 'PUT',
            //     // headers: {
            //     //   'Content-Type': 'application/json'
            //     // },
            //     // body: JSON.stringify({ username, password })

            //   });

            const response = await axios.post(
                'http://localhost:5001/update-student',
                student
            );

            console.log(response.data);
            alert("Student profile updated successfully!");
            // setStudent({ firstName: "", lastName: "", email: "", phone: "", rollNo: "", department: ""});
            // const data = await response.json();
            // console.log(data.status)
            // console.log(data); // Do something with the response
            // if (data.status === 201) {
            //     setUser(username);
            //     setLoggedIn(true);
            //     navigate('/jobs');
            // }
        } catch (error) {
            console.log('ero')
            console.error(error);
            // setLoggedIn(false);
        }
    };

    return (
        <>
            {console.log(userName)}
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
                                    <for for="exampleFormControlInput1" class="form-label">First Name</for>
                                    <input type="text" className="form-control" name="firstName" value={student.firstName} onChange={handleInputChange} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                <div className="input-group">
                                    <for for="exampleFormControlInput1" class="form-label">Last Name</for>
                                    <input type="text" className="form-control" name="lastName" value={student.lastName} onChange={handleInputChange} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                <div className="input-group">
                                    <for for="exampleFormControlInput1" class="form-label">Email ID</for>
                                    <input type="text" className="form-control" name="email" value={student.email} onChange={handleInputChange} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                <div className="input-group">
                                    <for for="exampleFormControlInput1" class="form-label">Phone Number</for>
                                    <input type="text" className="form-control" name="phone" value={student.phone} onChange={handleInputChange} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                <div className="input-group">
                                    <for for="exampleFormControlInput1" class="form-label">Roll Number</for>
                                    <input type="text" className="form-control" name="rollNo" value={student.rollNo} onChange={handleInputChange} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                <div className="input-group">
                                    <for for="exampleFormControlInput1" class="form-label">Department</for>
                                    <input type="text" className="form-control" name="department" value={student.department} onChange={handleInputChange} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
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

export default Profile;
