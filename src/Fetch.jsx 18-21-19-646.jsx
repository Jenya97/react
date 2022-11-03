import { Component } from "react";



export default class Fetch extends Component{
    constructor(props){
        super();
        this.state={
            users:[]
        }
    }
    componentDidMount(){
        fetch('https://reqres.in/api/users?page=2')
        .then(response=>response.json())
        .then(user=>this.setState({users:user.data}))
    }

    render(){
        return(
           <div>
           {this.state.users.map(item=>(
              <div key={item.id}>
                  <h2>{item.first_name}</h2>
              </div>
          ))}
          </div>
        )
    }
}