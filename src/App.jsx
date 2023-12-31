import React from "react";
import Header from "./components/Header";
import Advanced from "./components/TinderCards";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import SwipeButtons from "./components/SwipeButtons";
import ChatsList from "./components/ChatsPreviewList";

function App() {
  return (
    <div className="App">
        <Header/>
        <Routes>
            
          <Route path="/chat" element={<ChatsList/>}/>

          <Route path="/" element={<Advanced/>}/>

          <Route path="/profile" element ={<profileScreen/>}/>
          
        </Routes>

    </div>
  );
}

export default App;
