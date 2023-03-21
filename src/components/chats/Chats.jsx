import React, { useState } from "react";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { useFetch } from "../utilities/fetchUsers";
import "./chats.css";

const Chats = ({ user, openChatBoxHandler }) => {
  const { users } = useFetch();

  const users_list = users.filter((u) => u.id !== Number(user?.id));

  const [isChats, setIsChats] = useState(false);

  const isOpen = { height: "20rem" };
  const isClose = { height: "2.8rem" };

  return (
    <div className="chats" style={isChats ? isOpen : isClose}>
      <h4>
        <p>
          <ModeCommentOutlinedIcon />
          Chats
        </p>
        <span onClick={() => setIsChats(!isChats)} className="chat__icons">
          {isChats ? (
            <KeyboardArrowDownIcon />
          ) : (
            <KeyboardArrowUpOutlinedIcon />
          )}
        </span>
      </h4>
      {isChats ? (
        <ul className="chat__lists">
          {users_list.map((user) => (
            <span
              className="chat__list"
              onClick={() => openChatBoxHandler(user)}
            >
              <img src={user?.profilepicture} alt={user?.name} />
              <p>{user?.name}</p>
              <FiberManualRecordIcon
                style={{ fontSize: "8px", color: "green" }}
              />
            </span>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default Chats;
