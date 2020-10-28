import React from "react";

// import "./Menu.css";
class Menuitem extends React.Component{
    // constructor(props){
    //     super(props);
    // }
    render(){
        return (
            <div className="menuitem">
                <a href={this.props.url}>
                <img className="content-logo" src={this.props.imgURL} alt="user image"/>
                <div className="overlay">
                    <div className="text">{this.props.name}</div>
                </div>
                </a>
            </div>
        )
    }
}
export default Menuitem;
// function menuTerm(){
//     return (
//             <div className="menu1">
//                 {/* <a href="user"> */}
//                 <img className="content-logo" src="./images/user.png" alt="user image"/>
//                 <div className="overlay">
//                     <div className="text">USER</div>
//                 </div>
//                 {/* </a> */}
//             </div>

//     )
// }

// import React from "react"
// import "./Menu.css";

// class menuTerm extends React.Component{

//     render(){
//         return(
//             <div>
//                 HALLO
//             </div>
//         )
//     }
// }

// export default menuTerm;