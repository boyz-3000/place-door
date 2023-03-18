import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Updates from "./Pages/student/Updates";
import SigninForm from "./components/signin/SigninForm";
import Jobs from "./Pages/student/Jobs/Jobs";
import Resume from "./Pages/student/Resume";
import Applied from "./Pages/student/Applied/Applied";
import Profile from "./Pages/student/Profile/Profile";
import AppliedStudent from "./Pages/company/applied-students/applied-students";
import TopBar from "./components/top-bar/TopBar";

import "./App.css";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <TopBar />
        <Routes>
          <Route path="/" element={<SigninForm />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/applied" element={<Applied />} />
          <Route path="/update" element={<Updates />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/applied-student" element={<AppliedStudent />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;