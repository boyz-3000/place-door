import React, { useState, useContext } from "react";
import TopBar from "../../../components/top-bar/TopBar";
import "./AddUser.css";
import axios from "axios";

function AddUser(props) {

  const [username, setUsername] = useState("");
  const [userType, setUserType] = useState("");


  console.log(localStorage.getItem('username'));
  console.log(localStorage.getItem('usertype'));

  const users = [
    { _username: "user1", _password: "password1", _userType: "admin" },
    { _username: "user2", _password: "password2", _userType: "company" },
    { _username: "user3", _password: "password3", _userType: "admin" },
  ];
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [submitMsg, setSubmitMsg] = useState("");
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleUserType = (event) => {
    setUserType(event.target.value);
    console.log(event.target.value);
  };


  const submitUsers = async (users) => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json"
        }
      };

      const promises = users.map(async (user) => {
        const { _username, _password, _userType } = user;
        console.log({ _username, _password, _userType })
        const { data } = await axios.post("http://localhost:5001/add-user",
          {
            _username,
            _password,
            _userType
          },
          config
        );
        // localStorage.setItem('userInfo', JSON.stringify(data));
        return data.status;
      });

      const results = await Promise.all(promises);
      return results;
    } catch (error) {
      console.log(error);
      throw new Error("Error occurred while signing up users.");
    }
  };

  const _submitHandler = async (e) => {
    e.preventDefault();

    const statuses = await submitUsers(users);
    console.log(statuses);

    if (statuses.includes(201)) {
      setSubmitMsg("Users Registered Successfully!!");
      setUsername("");
      setPassword("");
      setUserType("admin");
    } else if (statuses.includes(400)) {
      setSubmitMsg("One or more users already registered!!");
    }
  }

  const submitHandler = async (e) => {
    e.preventDefault();

    if (isUsernameValid && isPasswordValid) {
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
        console.log(data['status'] === 400);
        localStorage.setItem('userInfo', JSON.stringify(data));

      } catch (error) {
        console.log(error)
        // setErrorMessages(error.response.data.message);
      }
      console.log(status);
      if (status === 201) {
        setSubmitMsg("User Registered Successfully !!");
        console.log(username, password, userType);
        setUsername("");
        setPassword("");
        setUserType("admin");
      } else if (status === 400) {
        setSubmitMsg("User Already Registered !!");
      }
    }
  }

  const handleUsernameChange = (event) => {
    setButtonClicked(false);
    const value = event.target.value;
    setUsername(value);
    if (value.length < 5) {
      setUsernameError("* Username must be at least 5 characters long");
    } else {
      setUsernameError("");
    }
  };



  const handlePasswordChange = (event) => {
    setButtonClicked(false);
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

  const checkField = () => {
    setButtonClicked(true);

  }

  return (
    <>
      <TopBar />
      <div className="add-user-page-bg">
        {console.log(userType)}
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
              {usernameError && (
                <p className="p-error">{usernameError}</p>
              )}
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
              {passwordError && (
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
                    <p className="form-check-label" value="admin" onClick={() => setUserType('admin')}>Admin</p>
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
                    <p className="form-check-label" value="company" onClick={() => setUserType('company')}>Company</p>
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
                    <p className="form-check-label" value="student" onClick={() => setUserType('student')}>Student</p>
                  </div>
                </div>
              </div>
            </div>
            <button className="login_button" type="submit" onClick={() => { checkField() }} disabled={!(!usernameError && !passwordError)}>
              ADD
            </button>
            {console.log(!(!usernameError && !passwordError))}
            {(usernameError || passwordError) && buttonClicked && (
              <p className="p-error">* Please fill the required fields !!</p>
            )}
            <p className="p-error">{submitMsg}</p>
            <div className="link_container"></div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddUser;
