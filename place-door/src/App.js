import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Updates from "./Pages/Updates";
import Jobs from "./Pages/Jobs/Jobs";
import Resume from "./Pages/Resume";
import Applied from "./Pages/Applied";
import Profile from "./Pages/Profile/Profile";

import TopBar from "./components/top-bar/TopBar";
import "./App.css";

function App(){
  return (
    <div className="app">
      <BrowserRouter>
        <TopBar />
        <Routes>
          <Route path="/" element={<Updates />} />
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