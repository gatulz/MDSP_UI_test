import React from "react";
import Login from "./Login";
import "./Menu.css";
const debugging = 1;
// import ""
// import { render } from "../../../../../OLD/LoginMenu3/app";

// let 

class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nama: "",
            alamat: "",
            imgURL: "",
            updateid: 0,
            showUpdate: {
                display: "none"
            }
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
            this.setState({ imgURL: reader.result }); // atau e.target.result
            document.getElementById('imgURL').value = this.state.imgURL;
            console.log("reader result : " + document.getElementById('imgURL').value);
        };
        console.log(reader.result)
        reader.readAsDataURL(event.target.files[0]);
    };
    componentDidMount(event) {
        const data_id = localStorage.getItem("id_active");
        this.setState({ id_active: data_id });
        const url = "http://localhost:5000/api/user";
        fetch(url, () => { })
            .then((res) => res.json())
            .then((res) => {
                // console.log("DATA DARI DETAIL USER :", res.data);
                this.setState({
                    nama: res.data[0].name_user,
                    alamat: res.data[0].addr_user,
                    imgURL: res.data[0].image_user
                })

                // console.log("DATA DARI DETAIL USER 2:", this.state.nama, this.state.alamat, this.state.imgURL);
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
        } else
            return (
                <div className="container-user">
                    <a href="/menu">
                        <button id="back1" type="button" name=""> BACK </button>
                    </a>

                    <div className="container1" style={this.state.updateid ? this.state.showUpdate : null}>
                        <div className="photo-profile">
                            <img src={this.state.imgURL} id="user-photo" alt="user picture" />
                        </div>
                    </div>
                    <div className="container2" style={this.state.updateid ? this.state.showUpdate : null}>
                        <h1>{this.state.nama}</h1>
                        <div className="user-info">
                            <h2>Nama : {this.state.nama}</h2>
                            <h2>Alamat : {this.state.alamat}</h2>
                        </div>
                        <button id="update-button" type="button" name="update" onClick={this.updateProfile}>UPDATE</button>

                    </div>

                    <div className="container2" style={this.state.updateid ? null : this.state.showUpdate}>
                        <form className="form1" >
                            <div className="photo">
                                <h2>Photo : </h2>
                                <input id="file" type="file" name='picture' onChange={(e) => this.loadFile(e)} />
                                <input id="imgURL" type="text" name="imgURL" style={{ display: "none" }} />


                            </div>
                            <div className="nama">
                                <h2>Name : </h2>
                                <input className="form2" type="text" name="nama" onChange={(event) => {
                                    this.setState({ nama: event.target.value });
                                    console.log(this.state.nama, this.state.alamat);
                                }} />
                            </div>
                            <div className="address">
                                <h2>Address : </h2>
                                <input className="form2" type="text" name="alamat" onChange={(event) => {
                                    this.setState({ alamat: event.target.value });
                                    console.log(this.state.nama, this.state.alamat);
                                }} /><br />
                            </div>
                            <button id="update-button2" type="submit" name="update" onClick={this.updateData}>UPDATE NOW</button>

                        </form>
                    </div>
                </div>
            );
    }

}

export default User;