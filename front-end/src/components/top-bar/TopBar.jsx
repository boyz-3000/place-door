import React from "react";
import "./TopBar.css";
// import Profile from "../../Pages/student/Profile/Profile";
import Modal from "../modal/Modal";
import Menu from "../menu/Menu";
import { Link } from "react-router-dom";

const click = () => {
  return alert("Clicked for menu.");
};



function TopBar() {
  const [show, setShow] = React.useState(false);
  let height = 420;
  let width = 280;
  const userType = localStorage.getItem('userType');
  if (userType==='company') {
    height = 420;
    width = 500;
  } else {
    height = 370;
    width = 310;
  }
  return (
    <div>
      <div className="bg-light">
        <div className="row">
          <div className="col-lg-1 col-md-1 col-sm-1 col-1 item-1">
            <div>
              <i
                className="fa-sharp fa-solid fa-bars"
                onClick={() => setShow(true)}
              ></i>
            </div>
          </div>
          <div className="col-lg-10 col-md-10 col-sm-10 col-10 name-logo">
            <span>
              <h4>
                <i className="fa-solid fa-graduation-cap"></i> PlaceDoor
              </h4>
            </span>
          </div>
          <div className="col-lg-1 col-md-1 col-sm-1 col-1  item-3">
            <div>
              <Link to="/profile">
                {" "}
                <i className="fa-sharp fa-regular fa-circle-user"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Modal
        show={show}
        onClose={() => setShow(false)}
        height={height}
        width={width}
      >
        <div className="modal-content-div">
          <h1> Menu </h1>
          <hr />
          <Menu />
        </div>
      </Modal>
    </div>
  );
}

export default TopBar;
