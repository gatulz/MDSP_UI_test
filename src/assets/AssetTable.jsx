import React from "react";
import "./AssetComponent.css";
let dataTest={
    data1:100,
    data2:200,
    data3:300,
    data4:400
} ;
let dataTest1 = [100,200,300,400];
function AssetTable(props){
    return(
        <div className="assets1">
            <div className="container-asset">
                <h1 className="titleAsset">{props.name}</h1>
                <table className="table">
                    <thead>
                    {dataTest1.map(data=>{
                        return (
                            <th>{data}</th>
                        )
                    })}
                    </thead>
                    <tbody>
                    {dataTest1.map(data=>{
                        return (
                            <td>{data}</td>
                        )
                    })}
                    </tbody>
                </table>
                
            </div>
        </div>
    )
}

export default AssetTable;