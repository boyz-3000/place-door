import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Updates from "./Pages/student/Updates";
import SigninForm from "./Pages/signin/Signin";
import Jobs from "./Pages/student/Jobs/Jobs";
import Resume from "./Pages/student/Resume";
import Applied from "./Pages/student/Applied/Applied";
import Profile from "./Pages/Profile/Profile";
import AppliedStudent from "./Pages/company/applied-students/applied-students";
import Post_jobs from "./Pages/company/post-job/post-jobs";
import "./App.css";
import StudentDetails from "./Pages/admin/student_details/StudentDetails";
import AddUser from "./Pages/admin/add-user/AddUser";

import UserContext from './UserContext';

// export const UserContext = createContext();

function App() {
  const [userName, setUserName] = useState("");
  const [userType, setUserType] = useState('student');
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    window.localStorage.setItem('userName', JSON.stringify(userName));
    window.localStorage.setItem('userType', JSON.stringify(userType));
    window.localStorage.setItem('loggedIn', JSON.stringify(loggedIn));
  }, [userName, userType, loggedIn]);

  // useEffect(() => {
  //   const _userName = window.localStorage.getItem('userName');
  //   if (_userName!==null) setUserName(_userName);
  // }, []);

  return (
    <UserContext.Provider value={{ userName, setUserName, userType, setUserType, loggedIn, setLoggedIn }}>
      <div className="app">
        {/* <BrowserRouter>
          <Routes>
            <Route path="/" element={<SigninForm />} />
          </Routes>
        </BrowserRouter> */}
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<SigninForm />} />
              <Route path="/jobs" element={<Jobs />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/applied" element={<Applied />} />
              <Route path="/update" element={<Updates />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/" element={<SigninForm />} />
              <Route path="/applied-student" element={<AppliedStudent />} />
              <Route path="/post-jobs" element={<Post_jobs />} />
              <Route path="/" element={<SigninForm />} />
              <Route path="/student-details" element={<StudentDetails />} />
              <Route path="/add-user" element={<AddUser />} />
            </Routes>
          </BrowserRouter>
        {/* {
          userType === "student" &&
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<SigninForm />} />
              <Route path="/jobs" element={<Jobs />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/applied" element={<Applied />} />
              <Route path="/update" element={<Updates />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </BrowserRouter>
        } */}
        {/* {
          userType === "company" &&
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<SigninForm />} />
              <Route path="/applied-student" element={<AppliedStudent />} />
              <Route path="/post-jobs" element={<Post_jobs />} />
            </Routes>
          </BrowserRouter>
        }
        {
          userType === "admin" &&
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<SigninForm />} />
              <Route path="/student-details" element={<StudentDetails />} />
              <Route path="/add-user" element={<AddUser />} />
            </Routes>
          </BrowserRouter>
        } */}
      </div>
    </UserContext.Provider>
  )
}

export default App;