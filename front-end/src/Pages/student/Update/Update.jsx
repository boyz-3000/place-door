import React, { useState } from "react";
import TopBar from "../../../components/top-bar/TopBar";
import "./Update.css";
import Chats from "./Chats";
import Message from "./Message";

function Update() {
  const [isShown, setIsShown] = useState(false);

  const [isSender, setIsSender] = useState([]);
  const [isMessage, setIsMessage] = useState([]);

  const handleChat = (_sender) => {
    setIsShown(true);
    const getMessage = Chats.find((s) => s.sender === _sender).message;
    setIsMessage(getMessage);
  };

  const check = () => {
    setIsShown(true);
  };
  return (
    <div>
      <TopBar />
      <div className="row">
        <div className="col-lg-3 col-md-3 col-sm-1 scrollable">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Updates</th>
              </tr>
            </thead>
            <tbody>
              {Chats.map((x, index) => (
                <tr onClick={() => handleChat(x.sender)} key={index}>
                  <td>{x.sender}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {isShown && (
          <div className="col-lg-9 col-md-9 col-sm-0 scrollable">
            {isMessage.map((m) => (
              <Message message={m} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Update;
