import React, { useState, useContext } from 'react'
import "./Signin.css";
import { useNavigate } from 'react-router-dom';

import UserContext from '../../UserContext';


function SigninForm() {
  const { setUser, setUserType } = useContext(UserContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  const errors = {
    username: "Invalid Username",
    password: "Invalid Password",
    noPassword: "Please enter your password",
    noUsername: "Please enter your Username",
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5001/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });

      const data = await response.json();
      console.log(data.status)
      console.log(data); // Do something with the response
      if (data.status === 201) {
        setUser(username);
        setUserType("student")
        navigate('/jobs')
      }
    } catch (error) {
      console.log('ero')
      console.error(error);
    }
  };

  return (
    <div className='page-bg'>
      <div className='signin-page'>
          <i className="fa-solid fa-graduation-cap"></i>
          <h1 className='title'>PlaceDoor</h1>
          <hr></hr>
          <p className='subtitle'> Login using your username and password.</p>
          <form>
            <div className='input_container'>
              <input type="text" placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />
              {/* {renderErrorMsg("username")}
              {renderErrorMsg("noUsername")} */}
              <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
              {/* {renderErrorMsg("password")}
              {renderErrorMsg("noPassword")} */}
            </div>
            <input className="login_button" type="submit" value="LOGIN" onClick={submitHandler} />
            <div className='link_container'>
              <a href='' className='small'>
                Forgot Password
              </a>
            </div>
          </form>
      </div>
    </div>
  )
}

export default SigninForm;