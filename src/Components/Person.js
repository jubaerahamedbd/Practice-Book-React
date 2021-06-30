import React, { Component } from 'react';
// let Person =(props) =>{
//     return(
//     <div>
//       <h2>Name: {props.name} Age: {props.age} </h2>
//       <h5>{props.children}</h5>
//     </div>
//     );
//     /* return React.createElement('p',null,"I am Person"); */
//   }

class Person extends Component{
    // constructor(props){
    //     super(props);
    // }
    render(){
        return(
        <div>
            <h2>Name: {this.props.name} Age: {this.props.age} </h2>
        </div>      
        )
    }
}

  export default Person;