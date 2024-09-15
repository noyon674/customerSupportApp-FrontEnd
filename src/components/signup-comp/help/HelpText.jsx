import React from "react";
import helpImg from "../../../assets/img/ticketPage.png";
import "./help.scss";

function HelpText() {
  return (
    <div className="helptext-section">
      <div className="img">
        <img src={helpImg} alt="" />
      </div>
      <div className="text">
        <h2>TicketHelp!</h2>
        <p>Register to manage tickets</p>
      </div>
    </div>
  );
}

export default HelpText;
