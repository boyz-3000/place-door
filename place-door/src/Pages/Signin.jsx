import React from "react";
import "./Signin.css";
const Signin = () => {
  return (
    <div className="page">
      <div className="cover">
        <h3>LOGIN</h3>
        <form>
          <hr />
          <div className="form-group">
            <for for="Email">Email </for>
            <input type="email" className="form-control" id="Email" />
          </div>
          <div className="form-group">
            <for for="Password">Password</for>
            <input type="password" className="form-control" id="Password" />
          </div>
          <br />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
