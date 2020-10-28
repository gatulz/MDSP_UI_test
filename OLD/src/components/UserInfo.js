import React from "react";
import Login from "./Login";
import "./Menu.css";
const debugging = 0;
// import ""
// import { render } from "../../../../../OLD/LoginMenu3/app";

// let 

class UserInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    updateProfile = (event) => {
        this.setState({ updateid: 1 });
    }
    showProfile(event) {
        this.setState({ updateid: 0 });
        // this.updateData(e);
    }
    updateData = (event) => {

        const url = "http://localhost:5000/upload2";//"https://randomuser.me/api/?results=10"; //"localhost:3000/getAll"

        var data2 = {
            nama: this.state.nama,
            alamat: this.state.alamat,
            // ,
            imgURL: this.state.imgURL
        };
        // var data2={nama:"aaa"};
        // alert(data2.alamat);
        // alert(this.state.nama);
        fetch(url, {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data2),
        })
            .then((res) => res.json())
            .then((res) => {
                // const dataUser=res.users;
                console.log(res);
                window.location.reload();
                // console.log(res.data);
            })
            .catch(error => {
                console.log(error);
            })
        // fetch("")
        event.preventDefault();
    }
    setImgURL(value) {
        this.setState({ imgURL: value });
    }
    loadFile(event) {
        var reader = new FileReader();

        reader.onload = (e) => {
            //   var urlIMG = document.getElementById('imgURL');
            //   urlIMG.value = reader.result;
            //   this.setImgURL(reader.result);
            //   this.setState({imgURL:reader.result});

            this.setState({ imgURL: reader.result }); // atau e.target.result
            //   alert(urlIMG.value);
            document.getElementById('imgURL').value = this.state.imgURL;
            //   alert(this.state.imgURL);
            console.log("reader result : " + document.getElementById('imgURL').value);
        };
        console.log(reader.result)
        reader.readAsDataURL(event.target.files[0]);
        // console.log("TEEEEES :",document.getElementById('imgURL').value);
        // alert(document.getElementById('imgURL').value);
    };
    componentDidMount(event) {
        const data_id = localStorage.getItem("id_active");
        this.setState({ id_active: data_id });
        const url = "http://localhost:5000/api/user";//"https://randomuser.me/api/?results=10"; //"localhost:3000/getAll"
        fetch(url, () => { })
            .then((res) => res.json())
            .then((res) => {
                console.log("DATA DARI DETAIL USER :", res.data);
                this.setState({
                    nama: res.data[0].name_user,
                    alamat: res.data[0].addr_user,
                    imgURL: res.data[0].image_user
                })

                console.log("DATA DARI DETAIL USER 2:", this.state.nama, this.state.alamat, this.state.imgURL);
            })

            .catch(error => {
                console.log(error);
            })
        // event.preventDefault();
    }
    render() {
        let id_active = localStorage.getItem("id_active");
        if (!debugging && (id_active == 0 || id_active === null)) {
            return (
                <Login />
            )
            // window.location.replace("http://localhost:3000/login");
        } else
            return (
                <div className="userInfo">
                    <a href="/menu">
                        <button id="back1" type="button" name=""> BACK </button>
                    </a>

                    <div className="container1" style={this.state.updateid ? this.state.showUpdate : null}>
                        <img src={this.state.imgURL} id="user-photo" alt="user picture" />
                    </div>
                    <div className="container2" style={this.state.updateid ? this.state.showUpdate : null}>
                        <h1>{this.state.nama}</h1>
                        <div className="user-info">
                            <h2 className="kiri">Nama : {this.state.nama}</h2>
                            <h2 className="kiri">Alamat : {this.state.alamat}</h2>
                        </div>
                        <button
                            id="update-button"
                            type="button"
                            name="update"
                            onClick={this.updateProfile}
                        >UPDATE</button>
                    </div>
                </div>
            );
    }

}

export default UserInfo;