import React from "react";
import Header from "./components/Header";
import TinderCards from "./components/TinderCards";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import SwipeButtons from "./components/SwipeButtons";
import Chats from "./components/Chats";
import ChatScreen from "./components/ChatScreen";
import Chat from "@mui/icons-material/Chat";

function App() {
  return (
    <div className="App">
        <Header/>
        <Routes>
        
          <Route path="/chat/:person" element={<ChatScreen/>}/>
            
          <Route path="/chat" element={<Chats/>}/>

          <Route path="/" element={<TinderCards/>}/>
          
        </Routes>

    </div>
  );
}

export default App;
