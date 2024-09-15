import React from "react";

import { FaArrowLeft } from "react-icons/fa";
import TicketForm from "../../components/ticket-comp/TicketForm";
import BottomNavBar from "../../components/common/bottom_navbar/BottomNavBar";
import Header from "../../components/common/header/Header";

function Ticket() {
  return (
    <>
      <Header icon={<FaArrowLeft />} />
      <TicketForm />
      <BottomNavBar />
    </>
  );
}

export default Ticket;
