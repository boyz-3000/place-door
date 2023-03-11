import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Updates from "./Pages/Updates";
import Jobs from "./Pages/Jobs/Jobs";
import Resume from "./Pages/Resume";
import Applied from "./Pages/Applied/Applied";
import Profile from "./Pages/Profile/Profile";
import Signin from "./Pages/Signin";
import AppliedStudent from "./components/comp-applied-stud/CompAppliedStud";

import "./App.css";

function App(){
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Updates />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/applied" element={<Applied />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/applied-student" element={<AppliedStudent />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;