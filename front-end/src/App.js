import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SigninForm from "./components/signin/SigninForm";
import Jobs from "./Pages/student/Jobs/Jobs";
import Resume from "./Pages/student/Resume";
import Applied from "./Pages/student/Applied/Applied";
import Profile from "./Pages/student/Profile/Profile";
import AppliedStudent from "./Pages/company/applied-students/applied-students";
import Post_jobs from "./Pages/company/post-job/post-jobs";
import "./App.css";
import StudentDetails from "./Pages/admin/student_details/StudentDetails";
import Update from "./Pages/student/Update/Update";

function App(){
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SigninForm />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/applied" element={<Applied />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/applied-student" element={<AppliedStudent />} />
          <Route path="/post-jobs" element={<Post_jobs />} />
          <Route path="/student-details" element={<StudentDetails />} />
          <Route path="/update" element={<Update />} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;