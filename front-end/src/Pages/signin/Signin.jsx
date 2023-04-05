import React, { useState, useContext } from 'react'
import "./Signin.css";
import { useNavigate } from 'react-router-dom';

import UserContext from '../../UserContext';


function SigninForm() {
  // const { userName, setUserName } = useContext(UserContext);
  // const { userType, setUserType } = useContext(UserContext);
  // const { loggedIn, setLoggedIn } = useContext(UserContext);

  const userType = window.localStorage.getItem('userType'); 
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [activeButton, setActiveButton] = useState('student');
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
        // setUserName(username);
        window.localStorage.setItem('userName', username);
        window.localStorage.setItem('loggedIn', true);
        // setLoggedIn(true);
        if (userType === 'student') {
          navigate('/jobs');
        } else if (userType === 'company') {
          navigate('post-jobs');
        } else {
          navigate('add-user');
        }
      }
    } catch (error) {
      console.log('ero')
      console.error(error);
      window.localStorage.setItem('loggedIn', false);
    }
  };

  return (
    <div className='page-bg'>
      {console.log(userType)}
      <div className='login-type-div'>
        <div className='login-type' onClick={() => window.localStorage.setItem('userType', 'student')} style={{ backgroundColor: userType === 'student' ? 'green' : 'white', color: userType === 'student' ? 'white' : 'blue' }}>
          Student
        </div>
        <div className='login-type' onClick={() => window.localStorage.setItem('userType', 'company')} style={{ backgroundColor: userType === 'company' ? 'green' : 'white', color: userType === 'company' ? 'white' : 'blue' }}>
          Company
        </div>
        <div className='login-type' onClick={() => window.localStorage.setItem('userType', 'admin')} style={{ backgroundColor: userType === 'admin' ? 'green' : 'white', color: userType === 'admin' ? 'white' : 'blue' }}>
          Admin
        </div>
      </div>
      <div className='signin-page'>
        <i className="fa-solid fa-graduation-cap"></i>
        <h1 className='title'>PlaceDoor</h1>
        <hr></hr>
        <p className='subtitle'> Login using your username and password.</p>
        <form>
          <div className='input_container'>
            <input type="text" placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
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