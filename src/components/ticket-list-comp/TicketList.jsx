import React, { useEffect, useState } from "react";
import "./ticket_list.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import TicketLoginIssue from "./TicketLoginIssue";
import TicketFeatureIssue from "./TicketFeatureIssue";
import TicketPaymentIssue from "./TicketPaymentIssue";
import { getTickets } from "../../utils/api";
import { useSelector } from "react-redux";

function TicketList() {
  const token = useSelector(state=>state.auth.accessToken);
  console.log(token, 'tickt')

  useEffect(()=>{
    try {
      const data = getTickets()
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  })

  return (
    <div className="ticket-list">
      <div className="buttons">
        <Link to="/ticket">Create Ticket</Link>
        <Link to="/chat">Chat Support</Link>
      </div>
      <div className="ticket-info">
        <h2>Your Tickets</h2>
        <TicketLoginIssue />
        <TicketFeatureIssue />
        <TicketPaymentIssue />
      </div>
    </div>
  );
}

export default TicketList;
