import React from "react";
import HeaderPage from "./assets/HeaderPage";
import AssetTable from "./assets/AssetTable";
import AssetGraph from "./assets/AssetGraph";
import "./Assets.css";
import {useState } from "react";

import {Bar} from 'react-chartjs-2';

function Assets(props){
    const [showAsset1, setShowAsset1] = useState(0);
    const [showAsset2, setShowAsset2] = useState(0);
    const [showAsset3, setShowAsset3] = useState(0);
    const [showAsset4, setShowAsset4] = useState(0);
    const [dataGraph, setDataGraph]= useState({
        labels: [1,2,3,4,5,6,7],
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
            data: [65, 59, 80, 81, 56, 55, 40]
            }
        ]
    });
    function showAsset(num){
        if (num==1){
            setShowAsset1(prev=>!prev);
        } else if (num==2){
            setShowAsset2(prev=>!prev);
        } else if (num==3){
            setShowAsset3(prev=>!prev);
        } else if (num==4){
            setShowAsset4(prev=>!prev);
        }
        console.log(typeof(dataGraph));
    }
    return(
        <div className="Assets-top">
            <HeaderPage 
                name={['assets 1', 'assets 2', 'assets 3', 'assets 4444']}
                toggleShow1 = {()=>showAsset(1)}
                toggleShow2 = {()=>showAsset(2)}
                toggleShow3 = {()=>showAsset(3)}
                toggleShow4 = {()=>showAsset(4)}
            /> 
            <div className="container11">
                <div className="left-side">
                    <h1>tesssssssssssssssssssss</h1>
                </div>
                <div className="right-side">
                        
                    {showAsset1?<AssetTable name="ASSET 1"/>:null}
                    {showAsset2?<AssetTable name="ASSET 2"/>:null}
                    {showAsset3?<AssetTable name="ASSET 3"/>:null}
                    {showAsset4?<AssetTable name="ASSET 4"/>:null}
                    <AssetTable name="ASSET 5"/>
                    <AssetTable name="ASSET 6"/>
                    <AssetTable name="ASSET 7"/>
                </div>
            </div>
            <div className="graph1">
                <center><Bar 
                            data={dataGraph} 
                            
                            height={400} 
                            // style={"height:200px;width:400px;"}
                            options={{maintainAspectRatio: false }}
                        />
                </center>
            </div>
        </div> 
    );
}
export default Assets;