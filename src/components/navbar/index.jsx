import React from "react";
import "./navbar.css";
import NavItem from "./NavItem";

export const Navbar = ({ id }) => {
  return (
    <div className="navbar">
      <ul className="nav__links">
        <div className="nav__link">
          <NavItem
            to={`/userdetails/profile/${id}`}
            label={"Profile"}
          />
        </div>
        <div className="nav__link">
          <NavItem
            to={`/userdetails/posts/${id}`}
            label={"Posts"}
          />
        </div>
        <div className="nav__link">
          <NavItem
            to={`/userdetails/gallery/${id}`}
            label={"Gallery"}
          />
        </div>
        <div className="nav__link">
          <NavItem
            to={`/userdetails/todo/${id}`}
            label={"ToDo"}
          />
        </div>
      </ul>
    </div>
  );
};
