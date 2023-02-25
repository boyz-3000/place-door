import React from "react";
import "./TopBar.css";

import Modal from "../modal/Modal";
import Menu from "../menu/Menu";

const click = ()=>{
  return alert("Clicked for menu.")
}

const clickProfile = () =>{
  return alert("Clicked for Profile.")
}
function TopBar() {
  const [show, setShow] = React.useState(false);
  return (
    <div>
      <div className="bg-light">
        <div className="row">
          <div className="col-lg-1 col-md-1 col-sm-1 col-1 item-1">
            <div >
            <i class="fa-sharp fa-solid fa-bars" onClick={() => setShow(true)}></i>
            </div>
           
          </div>
          <div className="col-lg-10 col-md-10 col-sm-10 col-10 name-logo">
            <span><h4><i className="fa-solid fa-graduation-cap"></i> PlaceDoor</h4></span>
          </div>
          <div className="col-lg-1 col-md-1 col-sm-1 col-1  item-3">
            <div>
              <i class="fa-sharp fa-regular fa-circle-user" onClick={clickProfile}></i>
            </div>
          </div>
        </div>
      </div>
      <Modal show={show} onClose={() => setShow(false)} height={500} width={300}>
        <h1> Menu </h1>
        <Menu />
      </Modal>
    </div>
  );
}

export default TopBar;