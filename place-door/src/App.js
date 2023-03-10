import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Updates from "./Pages/Updates";
import Jobs from "./Pages/Jobs/Jobs";
import Resume from "./Pages/Resume";
import Applied from "./Pages/Applied_Jobs/Applied";
import Profile from "./Pages/Profile/Profile";
import TopBar from "./components/top-bar/TopBar";
import "./App.css";
import SigninForm from "./Pages/Signin/SigninForm";

function App(){
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SigninForm />} />
          <Route path="/updates" element={<Updates />} />
          <Route path="/jobs" element={<Jobs />} /> 
          <Route path="/resume" element={<Resume />} />
          <Route path="/applied" element={<Applied />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;