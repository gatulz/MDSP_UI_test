import React from "react";
import Button from "./Button";
import Login from "./Login";
import Table from "./Table";
import "./Table.css";

const debugging=1;

class Document extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:[{}]
        }
    }
      componentWillMount(event){
        const data_id = localStorage.getItem("id_active");
        this.setState({id_active:data_id});
        const url = "http://localhost:5000/api/document";
        fetch(url,()=>{})
            .then((res)=> res.json())
            .then((res)=>{
                // console.log("DATA DARI TABEL DOCUMENT:",res.data);
                this.setState({
                    data:res.data
                })
                
                // console.log("DATA DARI DOCUMENT 2::",this.state.data);
            })

            .catch(error=>{
                console.log(error);
            })
        setTimeout(this.deleteLocalStorage,60000); //logout after 60sec
    }
    deleteLocalStorage=()=>{
        if (this.state.id_active!==undefined && this.state.id_active>0){
            localStorage.setItem("id_active",0);
            return(
                <Login />
            )
        }
    }
    render(){
        let id_active = localStorage.getItem("id_active");
        if (!debugging && (id_active==0||id_active===null)){
            return(
                <Login/>
            )
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

export default Document;