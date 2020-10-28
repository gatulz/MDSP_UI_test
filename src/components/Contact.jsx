import React from "react";
import Login from "./Login";
import Button from "./Button";
import Table from "./Table";
import "./Table.css";

const debugging=1;

class Contact extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:[{}]
        }
    }
      componentDidMount(event){
        const data_id = localStorage.getItem("id_active");
        this.setState({id_active:data_id});
        const url = "http://localhost:5000/api/contact";
        fetch(url,()=>{})
            .then((res)=> res.json())
            .then((res)=>{
                // console.log("DATA DARI TABEL Contact:",res.data);
                // const {id,type_file, date_uploaded, name_document} = res.data;
                this.setState({
                    data:res.data
                })
                
                // console.log("DATA DARI Contact 2::",Object.keys(this.state.data[0]));
            })

            .catch(error=>{
                console.log(error);
            })
        // event.preventDefault();
        
        // setTimeout(this.deleteLocalStorage,4000);
    }
    deleteLocalStorage=()=>{
        // localStorage.removeItem("id_active")
        if (this.state.id_active!==undefined && this.state.id_active>0){
            localStorage.setItem("id_active",0);
            window.location.replace("http://localhost:3000/login");
        }
    }
    render(){
        let id_active = localStorage.getItem("id_active");
        if (!debugging && (id_active==0||id_active===null)){
            // window.location.replace("http://localhost:3000/login");
            return(<Login />)
            
        } else
        return(
            <div className="container-user">
                <Button
                    link='/menu'
                    id='back1'
                />
                <div className="containerTable">
                    <Table 
                        id='docTable'
                        title={Object.keys(this.state.data[0])}
                        data={this.state.data}
                    />

                </div>
            </div>
            
        );
    }
}

export default Contact;