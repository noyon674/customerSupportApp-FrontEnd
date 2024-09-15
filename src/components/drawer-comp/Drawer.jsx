import React from "react";
import { Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaBook,
  FaCalendarCheck,
  FaComments,
  FaHome,
  FaQuoteLeft,
  FaTicketAlt,
  FaUser,
} from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import "./drawer.scss";
import Col from "react-bootstrap/Col";
import {logout } from "../../redux/actions/auth";
import { connect, useSelector } from "react-redux";

const Drawer = ({ open, onClose }) => {
  const isAuthenticated = useSelector(state=>state.auth.isAuthenticated);

  const handleLogout = (e) => {
  };

  return (
    <>
      <div
        className={`overlay ${!open ? "overlayHidden" : "overlayOpen"}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <div tabIndex="-1" className={`drawer ${open ? "animate" : "hidden"}`}>
        <div className="drawer-container">
          <Col xs={6} className="text">
            <span className="drawer-icon" onClick={() => onClose(false)}>
              <FaArrowLeft />
            </span>
            <h2>SupportHub</h2>
          </Col>
          <div className="list">
            <Link to="/" className="drawer-link">
              <FaHome />
              <p>Home</p>
            </Link>
            <Link to="/ticketlist" className="drawer-link">
              <FaTicketAlt />
              <p>Support Tickets</p>
            </Link>
            <Link to="/chat" className="drawer-link">
              <FaComments />
              <p>Chat</p>
            </Link>
            <Link to="/" className="drawer-link">
              <FaBook />
              <p>Knowledge</p>
            </Link>
            <Link to="/" className="drawer-link">
              <FaQuoteLeft />
              <p>Quotations</p>
            </Link>
            <Link to="/" className="drawer-link">
              <FaCalendarCheck />
              <p>Event Calender</p>
            </Link>
            <Link to="/" className="drawer-link">
              <FaUser />
              <p>Profile</p>
            </Link>
            {isAuthenticated ? 
             (<Link to="/" className="drawer-link" onClick={handleLogout}>
             <IoIosLogOut />
             <p>Logout</p>
             </Link>) : null
            }
          </div>
        </div>
      </div>
    </>
  );
};


const mapDispatchToProps = {
  logout, // Map action creator to props
};

export default connect(null, mapDispatchToProps)(Drawer); // Connect component to Redux
