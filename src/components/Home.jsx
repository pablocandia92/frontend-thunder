import React from "react";
import Advanced from "./card";
class Home extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return<div className="homepage">
                <h1>Welcome to My Tinder App</h1>
                <Advanced />
                </div>
    }
}

export default Home;


