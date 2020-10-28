import React from "react";
import logo from '../logo.svg';
import Menu from "./Menu";

class Test2 extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="App">
                <div>
                    <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.<br /> test 0.1
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                    </header>
                </div>
                <div class="container2">
                    <table class="table1">
                        <thead>
                            <tr>
                                <th>Data</th>
                                <th>Value</th>
                                <th></th>
                                <th>Data</th>
                                <th>Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Data 1 : </td>
                                <td>Value 1</td>
                                <td></td>
                                <td>Data 4 : </td>
                                <td>Value 4</td>
                            </tr>
                            <tr>
                                <td>Data 2 : </td>
                                <td>Value 2</td>
                                <td></td>
                                <td>Data 5 : </td>
                                <td>Value 5</td>
                            </tr>
                            <tr>
                                <td>Data 3 : </td>
                                <td>Value 3</td>
                                <td></td>
                                <td>Data 6 : </td>
                                <td>Value 6</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <Menu />
                </div>
        </div>
        )
    }
    
}
export default Test2;

