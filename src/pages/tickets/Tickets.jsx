import React from "react";
import TicketList from "../../components/ticket-list-comp/TicketList";
import BottomNavBar from "../../components/common/bottom_navbar/BottomNavBar";
import Header from "../../components/common/header/Header";

function Tickets() {
  return (
    <>
      <Header />
      <TicketList />
      <BottomNavBar />
    </>
  );
}

export default Tickets;
