import React from "react";
import "./Modal.css";

const Modal = ({ show, onClose, children, height, width }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modalWrapper">
      <div className="modal" style={{ height: height, width: width }}>
        {/* <button onClick={onClose} className={`${styles.btnClose} btn-close`} /> */}
        {/* <button onClick={onClose} className="btnClose"/> */}
        <div class="close-container" onClick={onClose}>
          <div class="leftright"></div>
          <div class="rightleft"></div>
          <label class="close">close</label>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
