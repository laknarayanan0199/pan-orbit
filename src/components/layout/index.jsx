import React, { useState } from "react";
import { useParams } from "react-router";
import { useFetch } from "../utilities/fetchUsers";
import ChatBox from "../chats/ChatBox";
import Chats from "../chats/Chats";
import Header from "../header/index";
import { Navbar } from "../navbar";
import "./layout.css";

const Layout = (props) => {
  const { id } = useParams();

  const { users } = useFetch();

  const userDetail = users.filter((user) => user.id === Number(id))[0];

  const [chatBox, setChatBox] = useState(false);

  const [chatBoxUser, setChatBoxUser] = useState([]);

  const closeChatBoxHandler = () => setChatBox(false);

  const openChatBoxHandler = (user) => {
    setChatBoxUser(user);
    setChatBox(true);
  };

  return (
    <div className={`${props.className ? props.className : "layout"}`}>
      <Navbar id={id} />
      <Header userDetail={userDetail} />
      {props.children}
      <Chats user={userDetail} openChatBoxHandler={openChatBoxHandler} />
      <ChatBox
        user={chatBoxUser}
        chatBox={chatBox}
        closeChatBoxHandler={closeChatBoxHandler}
      />
    </div>
  );
};

export default Layout;
