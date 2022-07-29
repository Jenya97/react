import React, { Component } from "react";


class Example extends Component{
    constructor(props){
        super();
        this.state={
            counter:0,
        }
        this.add=this.add.bind(this)
    }
    add(){
        this.setState({counter:0})
    }
    render(){
        return(
            <div>
             <h2>{this.props.name}</h2>
             <p>{this.props.age}</p>
             <img src={this.props.src} alt=""/>
             <p>{this.state.counter}</p>
             <p>{this.state.counter}</p>
             <button onClick={this.add}>add</button>
             </div>
        )
    }
}

export default Example;