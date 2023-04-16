import React from "react";
import "./Message.css";

function Message(props) {
  return (
    <div className="messages-div">
      <div className="row">
        <div className="col-lg-6 col-md-6">
          <div className="message-section">
            <p>{props.message}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Message;
