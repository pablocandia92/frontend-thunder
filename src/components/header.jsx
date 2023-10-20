import React from "react";
import PersonIcon from "@mui/icons-material/Person"
import BoltIcon from '@mui/icons-material/Bolt';
import ChatIcon from '@mui/icons-material/Chat';

import '../styles/header.css'

class Header extends React.Component {
    constructor(props) {
        super(props)

    }
    render(){
        return(
            <header>
                <button><PersonIcon/></button>
                <button><BoltIcon/></button>
                <button><ChatIcon/></button>
            </header>
        )
    }
}

export default Header;