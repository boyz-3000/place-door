import React, { useState } from "react";
import "./AddUser.css";
import axios from "axios";

function AddUser(props) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("admin");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [submitMsg, setSubmitMsg] = useState("");

  const handleUserType = (event) => {
    setUserType(event.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if(isUsernameValid && isPasswordValid){
      let status = 0;
      try {
        const config = {
          headers: {
            "Content-type": "application/json"
          }
        }

        // const response = await axios.post("http://localhost:5001/add-user");
        const { data } = await axios.post("http://localhost:5001/add-user",
          {
            username,
            password,
            userType
          },
          config
        );

        status = data['status']
        console.log(data['status']===400);
        localStorage.setItem('userInfo', JSON.stringify(data));

      } catch (error) {
        console.log(error)
        // setErrorMessages(error.response.data.message);
      }
      console.log(status);
      if (status===201){
        setSubmitMsg("User Registered Successfully !!");
        console.log(username, password, userType);
        setUsername("");
        setPassword("");
        setUserType("admin");
      } else if(status===400) {
        setSubmitMsg("User Already Registered !!");
      }
    }
  }

  const handleUsernameChange = (event) => {
    const value = event.target.value;
    setUsername(value);
    if (value.length < 5) {
      setUsernameError("* Username must be at least 5 characters long");
    } else {
      setUsernameError("");
    }
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
    if (value.length < 8) {
      setPasswordError("* Password must be at least 8 characters long");
    } else {
      setPasswordError("");
    }
  };

  const isUsernameValid = username.length >= 5 && !usernameError;
  const isPasswordValid = password.length >= 8 && !passwordError;

  // const checkInputs = () => {
  //   if (!isUsernameValid || !isPasswordValid){

  //   }
  // }

  return (
    <div className="add-user-page-bg">
      <div className="signin-page">
        <i className="fa-solid fa-graduation-cap"></i>
        <h1 className="title">PlaceDoor</h1>
        <hr />
        <form onSubmit={submitHandler}>
          <div className="input_container">
            <input
              type="text"
              placeholder="Username"
              value={username}
              // onChange={(e) => setUsername(e.target.value)}
              onChange={handleUsernameChange}
            />
            {!isUsernameValid && (
              <p className="p-error">{usernameError}</p>
            )}
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
            {!isPasswordValid && (
              <p className="p-error">{passwordError}</p>
            )}
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
                    value="admin"
                    checked={userType === "admin"}
                    onChange={handleUserType}
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
                    value="company"
                    checked={userType === "company"}
                    onChange={handleUserType}
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
                    value="student"
                    checked={userType === "student"}
                    onChange={handleUserType}
                  />
                  <p className="form-check-label">Student</p>
                </div>
              </div>
            </div>
          </div>
          <button className="login_button" type="submit" disabled={!isUsernameValid && !isPasswordValid}>
            ADD
          </button>
          {(usernameError!="" || passwordError!="") && (
            <p className="p-error">* Please fill the required fields !!</p>
          )}
          <p className="p-error">{submitMsg}</p>
          <div className="link_container"></div>
        </form>
      </div>
    </div>
  );
}

export default AddUser;
