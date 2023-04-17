import React, { useState } from "react";
import "./Notification.css";

const Notification = ({ children, height, width, color }) => {
    const [show, setShow] = useState(true);

    function handleClose() {
        setShow(false);
    }

    function handleShow() {
        setShow(true);
    }

    return (
        <>
            <div className={`notification-popup ${show ? 'show' : ''}`} style={{ height: height, width: width, backgroundColor: color }}>
                <span className="close-btn" onClick={handleClose}>&times;</span>
                <div className="children-content">
                    {children}
                </div>
            </div>
        </>
    );
};

export default Notification;
