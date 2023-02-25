import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Updates from "./Pages/Updates";
import Jobs from "./Pages/Jobs";
import Resume from "./Pages/Resume";
import Applied from "./Pages/Applied";

import TopBar from "./components/top-bar/TopBar";
import "./App.css";
import Signin from "./Pages/Signin";

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
          <Route path="/signup" element={<Signin />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;