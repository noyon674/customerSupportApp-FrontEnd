import React from "react";
import LoginImg from "../../../assets/img/ticketPage.png";
import "./logintext.scss";

function LogInText() {
  return (
    <div className="loginText-section">
      <img src={LoginImg} alt="" />

      <div className="text">
        <h2>TicketHelp!</h2>
        <p>Register to manage tickets</p>
      </div>
    </div>
  );
}

export default LogInText;
