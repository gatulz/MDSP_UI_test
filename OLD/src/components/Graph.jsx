import React from "react";
import Login from "./Login";
import LineExample from "./LineExample";
import Button from "./Button";
import "./Table.css";

const debugging=1;


class Graph extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:[{}]
        }
    }
      componentDidMount(event){
    }
    deleteLocalStorage=()=>{
        // localStorage.removeItem("id_active")
        if (this.state.id_active!==undefined && this.state.id_active>0){
            localStorage.setItem("id_active",0);
            return(
                <Login />
            )
            // window.location.replace("http://localhost:3000/login");
        }
    }
    render(){
        
        let id_active = localStorage.getItem("id_active");
        if (!debugging && (id_active==0||id_active===null)){
            return(
                <Login/>
            )
            // window.location.replace("http://localhost:3000/login");
        } else
        return(
            <div className="container-user">
                <Button
                    link='/menu'
                    id='back1'
                />
                <div className="containerTable">
                    {/* <h1 className="graphTitle">{this.props.title}</h1> */}
                    <LineExample 
                        title = {this.props.title}
                        label = {["X-Y Data"]}
                    />
                </div>
            </div>
            
        );
    }
    
}

export default Graph;