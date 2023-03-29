import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Updates from "./Pages/student/Updates";
import SigninForm from "./components/signin/SigninForm";
import Jobs from "./Pages/student/Jobs/Jobs";
import Resume from "./Pages/student/Resume/resume";
import Applied from "./Pages/student/Applied/Applied";
import Profile from "./Pages/student/Profile/Profile";
import AppliedStudent from "./Pages/company/applied-students/applied-students";
import Post_jobs from "./Pages/company/Post-jobs/post-jobs";
import "./App.css";
// import StudentDetails from "./Pages/admin/student-details/StudentDetails";
import StudentDetails from "./Pages/admin/student_details/StudentDetails";

function App(){
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SigninForm />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/applied" element={<Applied />} />
          <Route path="/update" element={<Updates />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/applied-student" element={<AppliedStudent />} />
          <Route path="/post-jobs" element={<Post_jobs />} />
          <Route path="/student-details" element={<StudentDetails />} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;