import React from "react";
import {useState } from "react";
import "./AssetTextBox.css";
import {Bar} from 'react-chartjs-2';


function AssetBar(props){
   
    return(
        
        <div className="assets1">
            <div className="container-textbox">
                <h1 className="titleAsset">{props.name}</h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse finibus libero in nulla dignissim, sagittis sagittis felis elementum. Nulla vel placerat odio, sodales ornare dui. Duis pretium eu lacus id pretium. Integer nulla nisl, porttitor et diam non, aliquet vestibulum sem. Sed tellus velit, consectetur et lectus vel, placerat porttitor metus. Morbi faucibus lacinia tempus. Morbi suscipit, nunc vel vestibulum aliquam, felis est iaculis justo, in ultrices orci eros sed lorem. Nunc et iaculis nunc. Aliquam iaculis efficitur nisl eget tempor. Vivamus laoreet nunc et mi sollicitudin, nec feugiat erat pharetra. Donec a bibendum ante. In hac habitasse platea dictumst.
                <br/>
                data time series : {props.input}
                </p>
                
            </div>
       
        
        </div>
    )
}

export default AssetBar;