import React from "react";
import Avatar from "@mui/material/Avatar";

const Chat = ({ name, message, profilePic, timestamp }) => {
  return (
      <>
        <Avatar className="chat__image" src={profilePic} />
        <div className="chat__details">
          <h2>{name}</h2>
          <p>{message}</p>
        </div>
        <p className="chat__timestamp">{timestamp}</p>
      </>
  );
};

export default Chat;