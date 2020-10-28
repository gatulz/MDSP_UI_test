import React from "react";

class Button extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <a href={this.props.link}>
                <button id={this.props.id} type="button" name=""> BACK </button>
            </a>
        )
    }
    
}
export default Button;