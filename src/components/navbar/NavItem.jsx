import { ChevronRight } from "@mui/icons-material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({ to, label }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <NavLink
        to={to}
        className={({ isActive }) => setIsActive(isActive)}
        style={
          isActive
            ? { color: "white", fontWeight: "bold" }
            : { color: "#a5a5e4" }
        }
      >
        {label}
        {isActive ? (
          <span>
            <ChevronRight className="icon" />
          </span>
        ) : null}
      </NavLink>
    </>
  );
};

export default NavItem;
