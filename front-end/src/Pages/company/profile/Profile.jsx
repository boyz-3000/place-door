import React, { useState, useContext, useEffect } from "react";
import TopBar from "../../../components/top-bar/TopBar";
import "./Profile.css";
import axios from "axios";

function CompanyProfile() {

    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const username = localStorage.getItem('username');

    const [company, setCompany] = useState({
        username: username,
        companyName: "",
        emailID: "",
        city: "",
        state: "",
        contactNo: "",
    });

    console.log(username);

    // useEffect(() => {

    //     if (isLoggedIn === 'false') {
    //         navigate('/');
    //     }

    //     const username = localStorage.getItem('username');
    //     console.log(username);
    //     async function getCompany() {
    //         const response = await axios.get(`http://localhost:5001/get-company:${username}`);
    //         console.log(response);
    //         console.log(response.data['message'] === null);
    //         if (response.data['message'] === null) {
    //             navigate('/profile');
    //         } else {
    //         }
    //         // setCompanies(response.data);
    //     }

    //     getCompany();
    //     console.log('waiting');
    // }, []);

    // const [firstName, setFirstName] = useState("");
    // const [lastName, setLastName] = useState("");
    // const [email, setEmail] = useState("");
    // const [phone, setPhone] = useState("");
    // const [rollNo, setRollNo] = useState("");
    // const [department, setDepartment] = useState("");

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCompany({ ...company, [name]: value });
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
                `http://localhost:5001/add-company:${username}`,
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

                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                <div className="input-group">
                                    <for for="exampleFormControlInput1" class="form-label">City</for>
                                    <input type="text" className="form-control" name="city" value={company.city} onChange={handleInputChange} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                <div className="input-group">
                                    <for for="exampleFormControlInput1" class="form-label">State</for>
                                    <input type="text" className="form-control" name="state" value={company.state} onChange={handleInputChange} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
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
