import "./navbar.css";
import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={"contenair"}>
      <div className={"contenairLeft"}></div>
      <div className={"contenairRight"}>
        <Link to="/home" style={{ textDecoration: "none", color: "black" }}>
          <Button variant="contained" style={{ width: "9rem" }}>
            Home
          </Button>
        </Link>
        <Link to="/services" style={{ textDecoration: "none", color: "white" }}>
          <Button variant="contained" color="primary" style={{ width: "9rem" }}>
            Our Services
          </Button>
        </Link>
        <Link to="/contact" style={{ textDecoration: "none", color: "white" }}>
          <Button variant="contained" color="primary" style={{ width: "9rem" }}>
            Contcat US
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
