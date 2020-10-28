import React from "react";

class Table extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <table style={{width: "90%" }} id={this.props.id}>
                    <thead>
                        <tr>
                            <th>{this.props.title[0]}</th>
                            <th>{this.props.title[1]}</th>
                            <th>{this.props.title[2]}</th>
                            <th>{this.props.title[3]}</th>
                        </tr>
                    </thead>
                    <tbody key={"body" + this.props.title[2]}>
                    {  
                        this.props.data.map((member)=>{
                            {/* console.log("data : ",this.props.data); */}
                            let count = Math.random();
                            let keys = Object.keys(member);
                            {/* console.log(keys); */}
                            return(
                            <tr key={keys}>
                                {
                                    keys.map((itemData)=>{
                                        {/* console.log("itemdata:", itemData);
                                        console.log("itemdata:", member[itemData]); */}
                                        count+=1;
                                        let newKey =itemData+String(count);
                                        {/* console.log(newKey); */}
                                        return(
                                            <td key={newKey}>{member[itemData]}</td>
                                        )
                                    })
                                }
                            </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
        )
    }
    
}
export default Table;

