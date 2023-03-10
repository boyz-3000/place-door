import React, { useEffect } from "react";
import "./Signin.css";
function Signin(props) {
  useEffect(()=>{
    document.body.style.background = '#645cbb';  
  })
  
  return (
    


    <div className="page">
      <div className="card">{props.children}</div>
    </div>
  );
}

export default Signin;
