import React, { useState } from "react";
import "./AddStudentForm.css";
// import { database } from '../../Pages/signin/databse';
import AddStudents from "../../../Pages/admin/AddStudents";
import axios from "axios";

function SigninForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessages, setErrorMessages] = useState({});
  const [loading, setLoading] = useState(false);

  const errors = {
    username: "Invalid Username",
    password: "Invalid Password",
    noPassword: "Please enter your password",
    noUsername: "Please enter your Username",
  };

  const renderErrorMsg = (name) =>
    name === errorMessages.name && (
      <p className="error_msg">{errorMessages.message}</p>
    );

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const config = {
        headers: {
          "Content-type": "application/json"
        }
      }

      setLoading(true);

      const { data } = await axios.post("/api/users/login",
        {
          username,
          password
        },
        config
      );

      console.log(data);
      localStorage.setItem('userInfo', JSON.stringify(data));
      setLoading(false);

    } catch (error) {
        setErrorMessages(error.response.data.message);
    }

    console.log(username, password);
  }

  return (
    <div>
      <AddStudents>
        <i className="fa-solid fa-graduation-cap"></i>
        <h1 className="title">PlaceDoor</h1>
        <hr></hr>
        <form>
          <div className="input_container">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {renderErrorMsg("username")}
            {renderErrorMsg("noUsername")}
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {renderErrorMsg("password")}
            {renderErrorMsg("noPassword")}
          </div>

          <div className="radio-buttons">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="option1"
                  />
                  <p className="form-check-label">Admin</p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio2"
                    value="option2"
                  />
                  <p className="form-check-label">Company</p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio3"
                    value="option3"
                  />
                  <p className="form-check-label">Student</p>
                </div>
              </div>
            </div>
          </div>
          <input className="login_button" type="submit" value="ADD" onClick={submitHandler}/>
          <div className="link_container"></div>
        </form>
      </AddStudents>
    </div>
  );
}

export default SigninForm;
