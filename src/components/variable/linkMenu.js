import config from "./config";
let menuObj=[
    {
        name:"USER",
        imgURL:"./images/user.png",
        url:"/user"
    },
    {
        name:"DOCUMENT",
        imgURL:"./images/document.png",
        url:"/document"
    },
    {
        name:"PHONE NUMBER",
        imgURL:"./images/phone.png",
        url:"/contact"
    },
    {
        name:"GRAPH / CHART",
        imgURL:"./images/graph.png",
        url:"/graph"
    },
    {
        name:"DOWNLOAD",
        imgURL:"./images/download.png",
        url:config.url_DB+"/download"
    },
    {
        name:"LOGOUT",
        imgURL:"./images/log-out.png",
        url:"/logout"
    }
];
export default menuObj;