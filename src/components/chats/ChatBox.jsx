import React, { useState } from "react";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CloseIcon from "@mui/icons-material/Close";
import "./chatbox.css";

const ChatBox = ({ user, chatBox, closeChatBoxHandler }) => {
  const [isChats, setIsChats] = useState(true);

  const isOpen = { height: "15rem" };
  const isClose = { height: "2.8rem" };
  return (
    <>
      {chatBox ? (
        <>
          <div className="chat__box" style={isChats ? isOpen : isClose}>
            <h5>
              <p>
                <img src={user?.profilepicture} alt={user?.name} />
                {user?.name}
              </p>
              <div className="chat__icons">
                <span onClick={() => setIsChats(!isChats)}>
                  {isChats ? (
                    <KeyboardArrowDownIcon />
                  ) : (
                    <KeyboardArrowUpOutlinedIcon />
                  )}
                </span>
                <CloseIcon
                  onClick={closeChatBoxHandler}
                  className="chat__icons"
                />
              </div>
            </h5>
            <span>Lorem ipsum dolor, sit amet </span>
            <span>Lorem ipsum dolor, sit amet consect</span>
            <p className="time">8:15</p>
            <span>Lorem ipsum dolor!</span>
          </div>
        </>
      ) : null}
    </>
  );
};

export default ChatBox;
