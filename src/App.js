import './App.css';
import Login from "./components/Login";
import Menu from "./components/Menu";
import User from "./components/User";
import Test from "./components/Test";
import Logout from "./components/Logout";
import Document from "./components/Document";
import Contact from "./components/Contact";
import Graph from "./components/Graph";
import Test2 from "./components/Test2";

import { Switch, Route, Link, Redirect } from 'react-router-dom';

let debugging=1;

function App() {
  return (
    <div className="App1">

        <Switch> 
        <Route exact path="/">
            <Login
              // parentCallback={this.handleCallback}
            />
          </Route>
          <Route exact path="/Login">
            <Login
              // parentCallback={this.handleCallback}
            />
          </Route>
          <Route exact path="/menu">
            <Menu />
          </Route>
          <Route exact path="/user">
            <User />
          </Route>
          <Route exact path="/test">
            <Test
              title="ini halaman test"
              name="ini Nama" 
              />
          </Route>
          <Route exact path="/logout">
            <Logout />
          </Route>
          <Route exact path="/document">
            <Document />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/graph">
            <Graph title="Graph Title 1"/>
          </Route>
        </Switch>
        
      <div className = 'buttonBar' style={!debugging?{display: "none"}:null}>
        {/* <button onClick={this.handleSaveData}>SaveData</button>
        <button onClick={this.handleGetData}>GetData</button>
        <button onClick={this.deleteData}>GetData</button> */}
        
        <h1><Link to="/Test2"> Test2 </Link></h1>
        <h1><Link to="/Login"> Login </Link></h1>
        <h1><Link to="/menu"> Menu </Link></h1>
        <h1><Link to="/user"> User </Link></h1>
        <h1><Link to="/document"> Document </Link></h1>
        <h1><Link to="/contact"> Contact </Link></h1>
        <h1><Link to="/graph"> Graph </Link></h1>
        <h1><a href="http://localhost:5000/login">Backend-Login</a></h1>
      </div>
      
      {/* <Test2/> */}

    </div>
  );
}

export default App;
