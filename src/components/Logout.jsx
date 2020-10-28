import React from "react";
import Login from "./Login";

class Logout extends React.Component{
    componentDidMount(){
        localStorage.setItem("id_active",0);
        window.location.replace("/login");
    }
    render(){
        localStorage.setItem("id_active",0);
        return(
            <Login />
        // <div>
        //     <h1>Logout Page</h1>
        // </div>
        )
    }
}

export default Logout;