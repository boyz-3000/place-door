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

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn'));
  const [username, setUsername] = useState(localStorage.getItem('username'));
  const [userType, setUserType] = useState(localStorage.getItem('userType'));

  return (
    <div className="app">
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<SigninForm />} />
        </Routes>
      </BrowserRouter> */}
      {/* <BrowserRouter>
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
      </BrowserRouter> */}
      {
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
      }
      {
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
      }
    </div>
  )
}

export default App;