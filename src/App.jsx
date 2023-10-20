import React from "react";
import Header from "./components/Header";
import TinderCards from "./components/TinderCards";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SwipeButtons from "./components/SwipeButtons";
import Chats from "./components/Chats";
import ChatScreen from "./components/ChatScreen";
import Chat from "@mui/icons-material/Chat";

function App() {
  return (
    <div className="App">
      
      <Router>
        
        <Routes>
        
          <Route path="/chat/:person" Component={ChatScreen}/>
            
          <Route path="/chat" Component={Chats}/>

          <Route path="/" Component={TinderCards}/>
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
