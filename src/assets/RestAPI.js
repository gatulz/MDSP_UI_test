import React, { useEffect } from "react";
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import { useState } from "react";
import accData from "./accData.json";


function RestAPI(props){
    const [state1,setState1] = useState(0);
    
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [dateFrom, setDateFrom] = useState("");
    const [dateTo, setDateTo] = useState("");
    const [authToken, setAuthToken] = useState("");
    const [identity, setIdentity] = useState("");
    const [timeSeries, setTimeSeries] = useState([]);
    const [dataTimeSeries, setDataTimeSeries] = useState({});
    
    const test1={menu1:"memememe", x:300, y:100};

    useEffect(()=>{
        const data=accData;
        // getLastData(20s);
    },[]);
    function getFunction(){
        const URL = "http://localhost:5000/api/document";
        fetch(URL)
            .then((res)=>res.json())
            .then(res=>{
                console.log(res);
            })
            .catch(err=>{
                setError(err);
                setIsLoaded(true);
            })
    }
    
    function getTimeSeries(){
        fetch("https://mdsp-api-test.herokuapp.com/acceleration/10") 
        .then(response => response.json())
        .then(result => {
            console.log(result);
            setTimeSeries(result);
            let dataX = result.map(member=>{
                return member.x;
            });
            let dataY = result.map(member=>{
                return member.y;
            });
            let dataZ = result.map(member=>{
                return member.z;
            });
            let dataTime = result.map(member=>{
                return member._time;
            });
            console.log("dataX ", dataX);
            props.dataAcc({x:dataX,y:dataY,z:dataZ,time:dataTime});
            setDataTimeSeries({x:dataX,y:dataY,z:dataZ,time:dataTime});
            // setIdentity(result.resources[0].userName);
            // console.log("timeseries data: ", timeSeries);
        })
        // .then(result=>console.log("timeseries data: ", timeSeries))
        .catch(error => console.log('error', error));
    }
    function getTimeSeries2(){
        fetch("/acceleration/10") 
        .then(response => response.json())
        .then(result => {
            console.log(result);
            setTimeSeries(result);
            let dataX = result.map(member=>{
                return member.x;
            });
            let dataY = result.map(member=>{
                return member.y;
            });
            let dataZ = result.map(member=>{
                return member.z;
            });
            let dataTime = result.map(member=>{
                return member._time;
            });
            console.log("dataX ", dataX);
            props.dataAcc({x:dataX,y:dataY,z:dataZ,time:dataTime});
            setDataTimeSeries({x:dataX,y:dataY,z:dataZ,time:dataTime});
            // setIdentity(result.resources[0].userName);
            // console.log("timeseries data: ", timeSeries);
        })
        // .then(result=>console.log("timeseries data: ", timeSeries))
        .catch(error => console.log('error', error));
    }
    function getIdentity(){
        fetch("https://mdsp-api-test.herokuapp.com/auth_identity") 
        .then(response => response.json())
        .then(result => {
            console.log(result);
            setIdentity(result.resources[0].userName);
            console.log("auth identity username : ", identity);
        })
        .catch(error => console.log('error', error));
    }
    function getIdentity2(){
        fetch("./auth_identity") 
        .then(response => response.json())
        .then(result => {
            console.log(result);
            setIdentity(result.resources[0].userName);
            console.log("auth identity username : ", identity);
        })
        .catch(error => console.log('error', error));
    }
    function getAuth2(){
        fetch("https://mdsp-api-test.herokuapp.com/test") 
        .then(response => response.json())
        .then(result => {
            console.log(result);
            setAuthToken(result.access_token);
            console.log("auth Token : ", authToken);
        })
        .catch(error => console.log('error', error));
        
    }
    function updateData(){
        props.dataAcc({x:dataTimeSeries.x,y:dataTimeSeries.y,z:dataTimeSeries.z,time:dataTimeSeries.time});
    }
    function handleDateChange(event){
        if (event.target.name=="time_From"){
            if (event.target.value <dateTo || dateTo=="")
                setDateFrom(event.target.value + "Z");
            else {
                console.log("value date and time From must be before Date and Time To");
                alert("value date and time From must be after Date and Time To");
                event.target.value = dateFrom.substring(0,dateFrom.length-1);
            }
        } else if (event.target.name=="time_To"){
            if (event.target.value >dateFrom || dateFrom=="")
                setDateTo(event.target.value + "Z");
            else {
                console.log("value date and time To must be after Date and Time From");
                alert("value date and time To must be after Date and Time From");
                event.target.value = dateTo.substring(0,dateTo.length-1);
            }
        }
    }
    if(error){
        return (
            <div>
                Error : {error}
            </div>
        )
    } else 
        return(
            <div className="container-api">
                <div className="button-test">
                    <button onClick={()=>getFunction()}>get</button>
                    <button onClick={()=>getIdentity()}>get Identity</button>
                    <button onClick={()=>getAuth2()}>getAuthToken</button>
                    <button onClick={()=>getTimeSeries()}>getTimeSeries</button>
                    <button onClick={()=>updateData()}>updateData</button>
                    <button onClick={()=>getTimeSeries2()}>getTimeSeries2</button>
                    <button onClick={()=>getIdentity2()}>get Identity2</button>
                    <button onClick={()=>{
                        console.log("time series : ",timeSeries);
                        console.log("data time series : ",dataTimeSeries);
                        }
                        }>printTimeSeries
                    </button>
                    {/* <p>{JSON.stringify(test1)}</p> */}
                    <input type="datetime-local" placeholder="from" name="time_From" onChange={(event)=>handleDateChange(event)} step="2"/>
                    <input type="datetime-local" placeholder="to" name="time_To" onChange={(event)=>handleDateChange(event)} step="2"/>
                    <p>date-time From : {dateFrom}</p>
                    <p>date-time To : {dateTo}</p>
                    <p>identity username {identity}</p>
                    <p>barrier Token {authToken}</p>
                    {/* <input type="datetime">input date from</input>
                    
                    <input type="datetime">input date from</input> */}
                    {/* <p>{JSON.stringify(accData)}</p> */}
                </div>
            </div>
        )
}

export default RestAPI;