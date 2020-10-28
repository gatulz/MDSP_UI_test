import React from "react";
import Login from "./Login";
import Button from "./Button";
import Table from "./Table";
import "./Table.css";

const debugging=0;

class TablePage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:[{}]
        }
    }
      componentDidMount(event){
        const data_id = localStorage.getItem("id_active");
        this.setState({id_active:data_id});
        const url = "http://localhost:5000/api"+this.props.urlAPI;
        fetch(url,()=>{})
            .then((res)=> res.json())
            .then((res)=>{
                this.setState({
                    data:res.data
                })
            })

            .catch(error=>{
                console.log(error);
            })
        // event.preventDefault();
        
        // setTimeout(this.deleteLocalStorage,4000);
    }
    deleteLocalStorage=()=>{
        if (this.state.id_active!==undefined && this.state.id_active>0){
            localStorage.setItem("id_active",0);
            window.location.replace("http://localhost:3000/login");
        }
    }
    render(){
        let id_active = localStorage.getItem("id_active");
        if (!debugging && (id_active==0||id_active===null)){
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

export default TablePage;