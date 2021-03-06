import React from "react";
import Menu from "./Menu";
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import logo2 from "../images/hrd_logo.png";
import "./Login2.css";

class Login extends React.Component {
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = { 
            input1: "",
            color:"blue",
            email:"",
            password:"" ,
            id_active:0,
            data:[{a:"tes"}]
        };
    }
    handleClick=()=> {
        console.log("button clicked");
        this.setState({color:"tes"});
        console.log(this.state.input1);
    }
    handleEmail=(event)=> {
        
        console.log(event.target.value);
        this.setState({
            email:event.target.value
        });
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        // this.handleEmail = this.handleEmail.bind(this);
        
        // console.log(this.state.input1);
        
        // setState
    }
    handlePassword=(event)=>{
        console.log(event.target.value,this.state.id_active);
        this.setState({
            password:event.target.value
        })
    }
    validateEmailPass=(email,pass,database)=>{
        for (let i=0; i<database.length;i++){
            if ((email==='admin@email.com' && pass==='pass123')||
            (email===database[i].username && pass===database[i].pass)){
                this.setState({id_active : database[i].id});
                console.log("ADA AKUN!", this.state.id_active);
            }
        }
    }
    
    loginUser=(event)=>{
        const url = "http://localhost:5000/api/login";
        
        let data1={
            yourEmail:this.state.email,
            yourPassword:this.state.password
        };
        console.log("data1",data1);
        // console.log("data1",data1);
        fetch(url, {
            method: 'POST', // or 'PUT'
            headers: {
                "Content-Type": "application/json",
                // "Content-Type": "multipart/form-data",
            },
            body: JSON.stringify(data1),
        })
            .then((res) => res.json())
            .then((res) => {
                // const dataUser=res.users;
                // console.log(res);
                // console.log("res.data  id:",res.data[0].id);
                this.setState({id_active:res.data[0].id});
                localStorage.setItem("id_active", this.state.id_active);
                if (this.state.id_active>0){
                    window.location.reload(false);
                }
                // const tesID = localStorage.getItem("id_active")
                // console.log(this.state.id_active);
            })
            .catch(error => {
                console.log(error);
            })
            
        event.preventDefault();
    }
    // handlePassingData=()=>{
    //     this.props.parentCallback(3);
    // }
    render=()=> {
        let id_active = localStorage.getItem("id_active");
        if (id_active>0 ) {
            return(
                <Menu />
            )
        } else
        return (
            <div className="container-top">
                <div className="container">
                    <div className="img-logo">
                        <img className="logo2" src={logo2} alt="employee" />
                    </div>

                    <div className="user-login">
                        <h1>User Login</h1>
                        {/* action="http://localhost:5000/api/login" method="post" encType="multipart/form-data" */}
                        <form className="form">
                        <div className="form">
                            <div className="email">
                                <img className="email-logo" src="./images/email.png" alt="" />
                                {/* <input className="inputForm" type="email" name="yourEmail" placeholder="Email ID" required /> */}
                                <input
                                    className="inputForm"
                                    type="email"
                                    name="yourEmail"
                                    placeholder="Email ID"
                                    required
                                    onChange={this.handleEmail}>
                                </input>
                            </div>
                            <div className="password">
                                <img className="password-logo" src="./images/password.png" alt="" />
                                {/* <input className="inputForm" type="password" name="yourPassword" placeholder="Password" minlength="4" required /> */}
                                <input
                                    className="inputForm"
                                    type="password"
                                    name="yourPassword"
                                    placeholder="Password123"
                                    required
                                    onChange={this.handlePassword}>
                                </input>
                            </div>
                                <input type="submit" name="" value="LOGIN" onClick={this.loginUser} />
                            {/* </Link> */}
                            <br /><br />
                            <center>
                                <a id="forgot" href="/" >Forgot Username / Password ?</a>
                            </center>
                        </div >
                        </form>
                        
                        {/* <button onClick={this.handlePassingData}>TEST</button> */}
                    </div>
                </div>
            </div>

        )
    }

}

export default Login;