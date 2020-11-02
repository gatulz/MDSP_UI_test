import React from "react";
import {useState } from "react";
import "./AssetComponent.css";
import {Bar} from 'react-chartjs-2';

function AssetBar(props){
    const [dataBar, setDataBar]= useState({
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
                <Bar 
                    // className="graph-asset"
                    data={dataBar} 
                    height={400} 
                    width={700}
                    // style={"height:200px;width:400px;"}
                    options={{maintainAspectRatio: true }}
                />
                
            </div>
       
        
        </div>
    )
}

export default AssetBar;