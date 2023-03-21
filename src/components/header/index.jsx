import { Popover } from "@mui/material";
import React, { useState } from "react";
import PopupUsers from "../popupusers/index";
import "./header.css";

const Header = ({ userDetail }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const headerName = window.location.href.split("/");

  const title = headerName[headerName.length - 2];

  const popupShowHandler = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : null;

  return (
    <>
      <div className="header">
        <h4>{title}</h4>
        <div className="user__header" onClick={popupShowHandler}>
          <img src={userDetail?.profilepicture} alt={userDetail?.name} />
          <h4>{userDetail?.name}</h4>
        </div>
      </div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        style={{
          overflow: "hidden",
          borderRadius: "5rem",
        }}
      >
        <PopupUsers user={userDetail} />
      </Popover>
    </>
  );
};

export default Header;
