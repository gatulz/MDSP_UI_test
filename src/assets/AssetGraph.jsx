import React from "react";
import "./AssetComponent.css";
let dataTest={
    data1:100,
    data2:200,
    data3:300,
    data4:400
} 
function AssetGraph(props){
    return(
        <div className="assets">
            <div className="container-asset">
                <table>
                    <thead>

                    </thead>
                    <tbody>
                        
                    </tbody>
                </table>
                {dataTest.map(data=>{

                })}
            </div>
        </div>
    )
}

export default AssetGraph;