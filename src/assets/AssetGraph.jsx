import React from "react";
import {useState } from "react";
import "./AssetComponent.css";

import {Line} from 'react-chartjs-2';

let dataTest={
    data1:100,
    data2:200,
    data3:300,
    data4:400
} 

let dataTest1 = [100,200,300,400];
function AssetGraph(props){
    const [dataGraph, setDataGraph]= useState({
        labels: props.labels,
        datasets: [
            {
            label: 'X-Y chart',
            fill: false,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            data: props.data
            }
        ]
    });
    return(
        
        <div className="assets1">
            <div className="container-asset">
                <h1 className="titleAsset">{props.name}</h1>
                <Line 
                    // className="graph-asset"
                    data={dataGraph} 
                    height={350} 
                    width={500}
                    // style={"height:200px;width:400px;"}
                    options={{maintainAspectRatio: true }}
                />
                
            </div>
       
        
        </div>
    )
}

export default AssetGraph;