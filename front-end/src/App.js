import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Updates from "./Pages/student/Updates";
import SigninForm from "./Pages/signin/Signin";
import Jobs from "./Pages/student/Jobs/Jobs";
import Resume from "./Pages/student/Resume";
import Applied from "./Pages/student/Applied/Applied";
// import Profile from "./Pages/Profile/Profile";
import StudentProfile from "./Pages/student/Profile/Profile";
import AppliedStudent from "./Pages/company/applied-students/applied-students";
import Post_jobs from "./Pages/company/post-job/post-jobs";
import "./App.css";
import StudentDetails from "./Pages/admin/student_details/StudentDetails";
import CompanyDetails from "./Pages/admin/company_details/CompanyDetails";
import AddUser from "./Pages/admin/add-user/AddUser";
import CompanyProfile from "./Pages/company/profile/Profile";
import Applications from "./Pages/admin/applications/Applications";

function App() {
  const userType = localStorage.getItem('userType');

  return (
    <div className="app">
      {
        userType === "student" &&
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SigninForm />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/applied" element={<Applied />} />
            <Route path="/update" element={<Updates />} />
            <Route path="/profile" element={<StudentProfile />} />
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
            <Route path="/profile" element={<CompanyProfile />} />
          </Routes>
        </BrowserRouter>
      }
      {
        userType === "admin" &&
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SigninForm />} />
            <Route path="/student-details" element={<StudentDetails />} />
            <Route path="/company-details" element={<CompanyDetails />} />
            <Route path="/applications" element={<Applications />} />
            <Route path="/add-user" element={<AddUser />} />
          </Routes>
        </BrowserRouter>
      }
    </div>
  )
}

export default App;