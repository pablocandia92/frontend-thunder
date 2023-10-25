import React from "react";
import ChatPreview from "./ChatPreview";
import './ChatsPreviewList.css'
import ChatScreen from "./ChatScreen";
import { v4 as uuidv4 } from 'uuid';

class ChatsList extends React.Component{
    constructor(props) {
        super(props)
﻿
        this.state = {
            messages : [
                {
              "name": "Ana García",
                  "message": "Hola, ¿cómo estás?",
                  "timestamp": "3 min atrás",
                  "profilePic":"https://media.vogue.mx/photos/5e9f0aef8966aa000859aac6/1:1/w_2264,h_2264,c_limit/como-hacer-el-peinado-de-ariana-grande.jpg"
    
                },
                {
                  "name": "Carlos Martínez",
                  "message": "Feliz cumpleaños",
                  "timestamp": "6 min atrás",
                  "profilePic":"https://media.vogue.mx/photos/5e9f0aef8966aa000859aac6/1:1/w_2264,h_2264,c_limit/como-hacer-el-peinado-de-ariana-grande.jpg"
    
                },
                {
                  "name": "Luisa Pérez",
                  "message": "¡Felicidades!",
                  "timestamp": "2 min atrás",
                  "profilePic":"https://media.vogue.mx/photos/5e9f0aef8966aa000859aac6/1:1/w_2264,h_2264,c_limit/como-hacer-el-peinado-de-ariana-grande.jpg"
    
                },
                {
                  "name": "Juan Rodríguez",
                  "message": "Nos vemos luego",
                  "timestamp": "4 min atrás",
                  "profilePic":"https://media.vogue.mx/photos/5e9f0aef8966aa000859aac6/1:1/w_2264,h_2264,c_limit/como-hacer-el-peinado-de-ariana-grande.jpg"
    
                },
                {
                  "name": "María Sánchez",
                  "message": "Buen fin de semana",
                  "timestamp": "7 min atrás",
                  "profilePic":"https://media.vogue.mx/photos/5e9f0aef8966aa000859aac6/1:1/w_2264,h_2264,c_limit/como-hacer-el-peinado-de-ariana-grande.jpg"
    
                },
                {
                  "name": "Pedro López",
                  "message": "Gracias por todo",
                  "timestamp": "1 min atrás",
                  "profilePic":"https://media.vogue.mx/photos/5e9f0aef8966aa000859aac6/1:1/w_2264,h_2264,c_limit/como-hacer-el-peinado-de-ariana-grande.jpg"
    
                }
              ],
        }
    }

    //component didmount api mensajes
    changeChat(name, profilePic, message) {
      this.openChat(name, profilePic, message)
    }

    openChat(name, profilePic, message) {
        this.setState({
          selectedChat: {
            name,
            profilePic,
            message,
          },
        });
      }

    render() {
        return (
            <div className="chat-section">
              <div className="container-chatslist__previews">
                {this.state.messages.map((e) => (
                  <div className="chat"
                  key={uuidv4()}
                  onClick={() => this.changeChat(e.name, e.profilePic, e.message)}>
                    <ChatPreview
                      key={uuidv4()}
                      name={e.name}
                      message={e.message}
                      timestamp={e.timestamp}
                      profilePic={e.profilePic}
                    />
                  </div>
                ))}
              </div>
              <div className="container-chatslist__chat-screen">
                {this.state.selectedChat && (
                  <ChatScreen
                    key={uuidv4()}
                    name={this.state.selectedChat.name}
                    profilePic={this.state.selectedChat.profilePic}
                    message={this.state.selectedChat.message}
                  />
                )}
              </div>
            </div>
          );
    }
}

export default ChatsList
