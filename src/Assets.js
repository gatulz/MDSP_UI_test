import React from "react";
import HeaderPage from "./assets/HeaderPage";
import AssetTable from "./assets/AssetTable";
import AssetGraph from "./assets/AssetGraph";
import AssetBar from "./assets/AssetBar";
import AssetTextBox from "./assets/AssetTextBox";
import RestAPI from "./assets/RestAPI";

import "./Assets.css";
import {useState } from "react";

import {Bar} from 'react-chartjs-2';

function Assets(props){
    const [showAsset1, setShowAsset1] = useState(0);
    const [showAsset2, setShowAsset2] = useState(0);
    const [showAsset3, setShowAsset3] = useState(0);
    const [showAsset4, setShowAsset4] = useState(0);
    const [showAsset5, setShowAsset5] = useState(0);
    const [dataAcc, setDataAcc] = useState({});
    const [dataGraph, setDataGraph]= useState({
        labels: [1,2,3,4,5,6,7,8,9,10],
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
            data: [65.6, 59, 80, 6, 56, 55, 40,20,100.9,40]
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
        }else if (num==5){
            setShowAsset5(prev=>!prev);
        }
        console.log(typeof(dataGraph));
    }
    
    function handleCallback(childData){
        setDataAcc(childData);
        console.log("childData : ",childData);
        console.log("dataAcc : ",dataAcc);
    }
    return(
        <div className="Assets-top">
            <HeaderPage 
                name={['assets 1', 'assets 2', 'assets 3', 'assets 4', 'Graph/Chart']}
                toggleShow1 = {()=>showAsset(1)}
                toggleShow2 = {()=>showAsset(2)}
                toggleShow3 = {()=>showAsset(3)}
                toggleShow4 = {()=>showAsset(4)}
                toggleShow5 = {()=>showAsset(5)}
            /> 

            <RestAPI  
                dataAcc = {(child)=>handleCallback(child)}
            />
            {/* <button></button> */}

            <div className="container11">
                <div className="left-side">
                    <h1>tesssssssssssssssssssss</h1>
                </div>
                <div className="right-side">
                        
                    {showAsset1?<AssetTable name="ASSET 111111111111"/>:null}
                    {showAsset2?<AssetTable name="ASSET 2"/>:null}
                    {showAsset3?<AssetTable name="ASSET 3"/>:null}
                    {showAsset4?<AssetTable name="ASSET 4"/>:null}
                    <AssetTable name="ASSET 5"/>
                    <AssetTable name="ASSET 6"/>
                    <AssetTable name="ASSET 7"/>
                    
                </div>
                
            </div>
            <div className="container11">
                <div className="right-side">
                
                    {/* {showAsset5?
                        <AssetGraph
                            name="ASSET Graph"
                            labels = {dataGraph.labels}
                            data = {dataGraph.datasets[0].data}
                            
                        />:null
                    } */}
                    
                    {showAsset5?
                        <AssetGraph
                            name="Line Chart - Acc X"
                            labels = {dataAcc.time}
                            data = {dataAcc.x}
                            
                        />:null
                    }
                    {showAsset5?
                        <AssetBar
                            name="BAR -Acc X"
                            labels = {dataAcc.time}
                            data = {dataAcc.x}
                            
                        />:null
                    }
                </div>
                
            </div>
            <div className="container11">
                <div className="right-side">
                    <AssetTextBox input={JSON.stringify(dataAcc)}/>
                    <AssetTextBox/>
                    <AssetTextBox/>
                    <AssetTextBox/>
                </div>
                
            </div>
        </div> 
    );
}
export default Assets;