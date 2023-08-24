import React from "react";
import "./Popup.css"; 

const Popup = ({ onClose, content, isCorrect }) => {
  return (
    <div className="popup-container">
      <div className="popup-content">
        {/* <button className="close-button" onClick={onClose}>
          X
        </button> */}
        {"Your answer is " + isCorrect}
      </div>
    </div>
  );
};

export default Popup;
