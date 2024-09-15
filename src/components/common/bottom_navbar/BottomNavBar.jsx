import React from "react";
import { Link } from "react-router-dom";
import "./bottom_navbar.scss";

import { FaComments, FaHome, FaTicketAlt, FaUserAlt } from "react-icons/fa";

function BottomNavBar() {
  return (
    <>
      <div className="nav-bar fixed-bottom">
        <Link className="icon active" to="/">
          <FaHome />
        </Link>
        <Link className="icon" to="/ticket">
          <FaTicketAlt />
        </Link>
        <Link className="icon" to="/comment">
          <FaComments />
        </Link>
        <Link className="icon" to="/profile">
          <FaUserAlt />
        </Link>
      </div>
    </>
  );
}

export default BottomNavBar;
