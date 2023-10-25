import React from "react";
import PersonIcon from "@mui/icons-material/Person"
import BoltIcon from '@mui/icons-material/Bolt';
import ChatIcon from '@mui/icons-material/Chat';
import { useNavigate } from "react-router-dom";
import './Header.css'
import { IconButton } from "@mui/material";


function Header(){

        const navigate = useNavigate();
        return(
            <header>
                <link
                    href='https://fonts.googleapis.com/css?family=Damion&display=swap'
                    rel='stylesheet'
                />
                <link
                    href='https://fonts.googleapis.com/css?family=Alatsi&display=swap'
                    rel='stylesheet'
                />
                <IconButton onClick={() => navigate("/chat")}><PersonIcon/></IconButton>
                <IconButton onClick={() => navigate("/")}><BoltIcon/></IconButton>
                <IconButton onClick={() => navigate("/chat")}><ChatIcon/></IconButton>
            </header>
        )
    }

export default Header;