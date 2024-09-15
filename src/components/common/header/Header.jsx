import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { VscThreeBars } from "react-icons/vsc";
import { FaUser } from "react-icons/fa";
import Drawer from "../../drawer-comp/Drawer";
import "./header.scss";

function Header(props) {
  const [open, setOpen] = useState(false);

  const handleOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <>
      <div className="header">
        <div className="icon-div">
          <button type="button" onClick={handleOpen}>
            <VscThreeBars />
          </button>
          <Drawer open={open} onClose={handleClose} />
        </div>
        <div className="text">
          <Link to="/" className="brand-name">
            SupportHub
          </Link>
        </div>
        <div className="icon-div">
          <Link to="/profile">
            <FaUser />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
