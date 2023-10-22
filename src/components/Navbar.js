import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
// import "../styles/bootstrap.css";
// import "../styles/style.css";
// import "../styles/font-awesome.min.css";
import "../styles/Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";

function Navbar() {
  /* A const to determine whether to expand the navbar */
  const [expandNavbar, setExpandNavbar] = useState(false);

  /* Get the current location */
  const location = useLocation();

  /* Create a function to turn off the navbar 
      only active when page location changes */
  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);
  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <ReorderIcon />{" "}
        </button>
      </div>
      <div className="links">
        <Link to="/"> Home </Link>
        <Link to="/projects"> Portfolio </Link>
        <Link to="/aboutme"> About </Link>
      </div>
    </div>
  );
}

export default Navbar;
