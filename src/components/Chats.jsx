import React from "react";
import "./Chats.css";
import Chat from "./Chat"
import Header from "./Header";
const Chats = () => {
  return (
  <div>
    <div className="chats">
        <Chat
        name="Ariana Grande"
        message="Que lindo que sos jaja" 
        timestamp="6 mins ago" 
        profilePic="https://media.vogue.mx/photos/5e9f0aef8966aa000859aac6/1:1/w_2264,h_2264,c_limit/como-hacer-el-peinado-de-ariana-grande.jpg"
        />
    </div>
  </div>
  )
};

export default Chats;
