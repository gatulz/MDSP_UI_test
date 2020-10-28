import React from "react";
import "./HeaderPage.css";
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import { useState } from "react";
import useVisibilityToggler from "../function/func";


function HeaderPage(props){
    const [state1,setState1] = useState(0);
    const [asset1,showAsset1] = useState(0);
    const [asset2,showAsset2] = useState(0);
    const [asset3,showAsset3] = useState(0);
    const [asset4,showAsset4] = useState(0);
    // const [ComponentVar, toggleVisibility1] = 
    //     useVisibilityToggler(
    //         <button class="assets-button"> SHOW </button>, false
    //     );
    function handleClick(){
        // alert("tesss");
        console.log("before = ",state1);
        setState1(1);
        console.log("after = ",state1);
    }
    return(
        <div className="header-page">
            <div className="buttonBar">
                <Link class="assets-button" to="/asset1" onClick={()=>props.toggleShow1()}>{props.name[0]}</Link>
                <Link class="assets-button" to="/asset2" onClick={()=>props.toggleShow2()}>{props.name[1]}</Link>
                <Link class="assets-button" to="/asset3" onClick={()=>props.toggleShow3()}>{props.name[2]}</Link>
                <Link class="assets-button" to="/asset4" onClick={()=>props.toggleShow4()}>{props.name[3]}</Link>
                <h2 class="assets-button" to="/asset5" onClick={()=>props.toggleShow1()}>test Show/Hide</h2>
            </div>
            {(asset1)?<button class="assets-button"> SHOW {props.name[0]} </button> : null} {/*show and hide*/}
            {(asset2)?<button class="assets-button"> SHOW {props.name[1]} </button> : null} {/*show and hide*/}
            {(asset3)?<button class="assets-button"> SHOW {props.name[2]} </button> : null} {/*show and hide*/}
            {(asset4)?<button class="assets-button"> SHOW {props.name[3]} </button> : null} {/*show and hide*/}
        </div>
    )
}

export default HeaderPage;