import React from "react";
import TopBar from "./components/top-bar/TopBar";
import CardDashboard from "./components/card/CardDashboard";
import "./App.css";

function App(){
  return (
    <div className="app">
      <TopBar />
      <CardDashboard />
    </div>
  )
}

export default App;