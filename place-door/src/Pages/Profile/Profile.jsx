import React from "react";
import "./Profile.css";

function Profile() {
    return (
        <div>
            <header>
                <h3>Profile</h3>
                <hr />
            </header>

            <div className="row" id="profile">
                <div className="col-lg-3 col-md-3 col-sm-12" id="profile-icon-div">
                    <i class="fa-regular fa-user" id="profile-icon"></i>
                </div>

                <div className="col-lg-9 col-md-9 col-sm-12" id="profile-details">

                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                            <div className="input-group">
                                <for for="exampleFormControlInput1" class="form-label">First Name</for>
                                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                        <div className="input-group">
                                <for for="exampleFormControlInput1" class="form-label">Last Name</for>
                                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                            <div className="input-group">
                                <for for="exampleFormControlInput1" class="form-label">Email ID</for>
                                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                        <div className="input-group">
                                <for for="exampleFormControlInput1" class="form-label">Phone Number</for>
                                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                            <div className="input-group">
                                <for for="exampleFormControlInput1" class="form-label">Roll Number</for>
                                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                        <div className="input-group">
                                <for for="exampleFormControlInput1" class="form-label">Department</for>
                                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
                            </div>
                        </div>
                    </div>

                    {/* <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 input-group mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-default">Phone Number</span>
                            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 input-group mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-default">Email ID</span>
                            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 input-group mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-default">Roll Number</span>
                            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 input-group mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-default">Department</span>
                            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
                        </div>
                    </div> */}

                    <div className="button-div">
                        <button type="button" class="btn btn-primary">Primary</button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Profile;
