import React from "react"
import Login from "./Login"
import "./Menu.css";
// import menuTerm from "./components/menuTerm";
import Menuitem from "./Menuitem";
import menuObj from "./variable/linkMenu";
let debugging=1;

class Menu extends React.Component{
    constructor(props){
        super(props);
        this.state={
            id_active:0
        }
    }
    componentDidMount(){
        console.log("ID ACTIVE :",this.props.id_active);
        let id_active = localStorage.getItem("id_active");
        this.setState({id_active:id_active});
        console.log("ID_AKTIF :", this.state.id_active);
        if (!debugging && (id_active==0 || id_active===null)){
            window.location.replace("/login");
        } 
        setTimeout(this.deleteLocalStorage,60000); // logout account after 60 sec
    }
    deleteLocalStorage=()=>{
        if (this.state.id_active!==undefined && this.state.id_active>0){
            localStorage.setItem("id_active",0);
        }
    }
    render(){
        let id_active = localStorage.getItem("id_active");
        if (!debugging && (id_active==0 || id_active===null)){
            return(
                <Login />
            )
        } else
        return(
            <div className="menu">
                {menuObj.map((menuTerm)=>{
                    // console.log(menuTerm);
                    return(
                        <Menuitem 
                            key={menuTerm.name}
                            name={menuTerm.name}
                            imgURL={menuTerm.imgURL}
                            url={menuTerm.url}
                        />
                    )
                })
                }
            </div>
        )
    }
}

export default Menu;