import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Updates from "./Pages/student/Updates";
import SigninForm from "./Pages/Signin/SigninForm";
import Jobs from "./Pages/Jobs/Jobs";
import Resume from "./Pages/student/Resume";
import Applied from "./Pages/Applied/Applied";
import Profile from "./Pages/Profile/Profile";
import AppliedStudent from "./components/comp-applied-stud/CompAppliedStud";

import "./App.css";

function App(){
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SigninForm />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/applied" element={<Applied />} />
          <Route path="/profile" element={<Updates />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/applied-student" element={<AppliedStudent />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;