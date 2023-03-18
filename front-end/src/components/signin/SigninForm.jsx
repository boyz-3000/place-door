import React, { useState } from 'react'
import "./SigninForm.css";
import Signin from '../../Pages/signin/Signin';
import { database } from '../../Pages/signin/databse';

function SigninForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessages, setErrorMessages] = useState({})

  const errors = {
    username: "Invalid Username",
    password: "Invalid Password",
    noPassword: "Please enter your password",
    noUsername: "Please enter your Username"
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username) {
      setErrorMessages({ name: "noUsername", message: errors.noUsername });
      return;
    }

    if (!password) {
      setErrorMessages({ name: "noPassword", message: errors.noPassword });
      return;
    }

    const currentUser = database.find((user) => user.username === username);

    if (currentUser) {
      if (currentUser.password !== password) {
        setErrorMessages({ name: "password", message: errors.password })
      }
      else {
        setErrorMessages({});
        console.log("Logged In")
      }
    }
    else {
      setErrorMessages({ name: "username", message: errors.username })
    }
  };

  const renderErrorMsg = (name) =>
    name === errorMessages.name && (
      <p className="error_msg">{errorMessages.message}</p>
    )

  return (
    <Signin>
      <i className="fa-solid fa-graduation-cap"></i>
      <h1 className='title'>PlaceDoor</h1>
      <hr></hr>
      <p className='subtitle'> Login using your username and password.</p>
      <form onSubmit={handleSubmit}>
        <div className='input_container'>
          <input type="text" placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />
          {renderErrorMsg("username")}
          {renderErrorMsg("noUsername")}
          <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
          {renderErrorMsg("password")}
          {renderErrorMsg("noPassword")}
        </div>
        <input className="login_button" type="submit" value="LOGIN" />
        <div className='link_container'>
          <a href='' className='small'>
            Forgot Password
          </a>
        </div>
      </form>
    </Signin>

  )
}

export default SigninForm