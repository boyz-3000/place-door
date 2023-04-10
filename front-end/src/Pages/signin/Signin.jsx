import React, { useState, useContext } from 'react'
import "./Signin.css";
import { useNavigate } from 'react-router-dom';


function SigninForm() {
  localStorage.setItem('isLoggedIn', 'false');
  const [usernameInput, setUsernameInput] = useState('');
  const [userType, setUserType] = useState(localStorage.getItem('userType'));
  // const userType = localStorage.getItem('userType');

  const [username, setUsername] = useState(localStorage.getItem('username'));
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
        localStorage.setItem('username', username);
        localStorage.setItem('isLoggedIn', 'true');
        if (userType === 'student') {
          localStorage.setItem('userType', 'student');
          navigate('/jobs');
        } else if (userType === 'company') {
          localStorage.setItem('userType', 'company');
          navigate('post-jobs');
        } else {
          localStorage.setItem('userType', 'admin');
          navigate('add-user');
        }
      }
    } catch (error) {
      console.log('ero')
      console.error(error);
      window.localStorage.setItem('loggedIn', false);
    }
  };

  const handleUserType = (_userType) => {
    setUserType(_userType);
    localStorage.setItem('userType', userType);
  }

  return (
    <div className='page-bg'>
      {console.log(userType)}
      <div className='login-type-div'>
        <div className='login-type' onClick={() => handleUserType('student')} style={{ backgroundColor: userType === 'student' ? 'green' : 'white', color: userType === 'student' ? 'white' : 'blue' }}>
          Student
        </div>
        <div className='login-type' onClick={() => handleUserType('company')} style={{ backgroundColor: userType === 'company' ? 'green' : 'white', color: userType === 'company' ? 'white' : 'blue' }}>
          Company
        </div>
        <div className='login-type' onClick={() => handleUserType('admin')} style={{ backgroundColor: userType === 'admin' ? 'green' : 'white', color: userType === 'admin' ? 'white' : 'blue' }}>
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