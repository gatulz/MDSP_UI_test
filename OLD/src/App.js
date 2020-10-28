import React from 'react';
// import Menuitem from "./components/Menuitem";
import './App.css';
// import {Login, Menu, User} from "./components/variable/config";
import Login from "./components/Login";
import Menu from "./components/Menu";
import User from "./components/User";
import Test from "./components/Test";
import Logout from "./components/Logout";
import Document from "./components/Document";
import Contact from "./components/Contact";
import Graph from "./components/Graph";
// import Menuitem from "./components/Menuitem";
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import WithListLoading from './components/WithListLoading';
const debugging = 0;

function finduser(newArr) {
  return newArr.find(member => member.id === 1);
}
class App extends React.Component {
  constructor(props) {
    super(props);
    // this.props.parentCallback();
    this.state = {
      email: "",
      password: "",
      id_active: 0
    }
  }

  handleCallback = (childData) => {
    this.setState({ id_active: childData });
    console.log(this.state.id_active);
  }
  handleSaveData = () => {
    localStorage.setItem("dataTest", JSON.stringify([this.state]));
    localStorage.setItem("id_active", 0);
  }
  handleGetData = () => {
    // localStorage.setItem("dataTest", JSON.stringify([this.state]));
    let data1 = localStorage.getItem("dataTest");
    data1 = JSON.parse(data1);
    console.log(data1);
    let data2 = localStorage.getItem("id_active");
    console.log(data2);
  }
  deleteData = () => {
    localStorage.removeItem("dataTest");
    localStorage.removeItem("id_active");
  }
  render() {
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

        <div style={!debugging?{display: "none"}:null}>
          <button onClick={this.handleSaveData}>SaveData</button>
          <button onClick={this.handleGetData}>GetData</button>
          <button onClick={this.deleteData}>GetData</button>
          <h1><Link to="/Login"> Login </Link></h1>
          <h1><Link to="/menu"> Menu </Link></h1>
          <h1><Link to="/user"> User </Link></h1>
          <h1><Link to="/document"> Document </Link></h1>
          <h1><Link to="/contact"> Contact </Link></h1>
          <h1><Link to="/graph"> Graph </Link></h1>
          <h1><a href="http://localhost:5000/login">Backend-Login</a></h1>
          {/* <h1><Link to="http://localhost:5000/"> Document </Link></h1> */}

        </div>

      </div>
    )

  }
}

// componentWillMount(){
//   document.getElementById('body').className='darktheme'
// }
//   componentWillUnmount(){
//   document.getElementById('body').className=''
// }
export default App;
