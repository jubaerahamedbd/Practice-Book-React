import React,{Component} from 'react';
import './App.css';
// import Person from './Components/Person.js'
import Book from './Components/Book.js'

// let App= () => {
//   return (
//     <div className="App">
//       <h1>Hello World</h1>
//       <Person/>
//     </div>
//   );
//   /* return React.createElement('div',{className:"App"},React.createElement('h1',null,'Hello World'),<Person/>) */
// }
// let Person =() =>{
//   return(
//   <div>
//     <h5>I am person</h5>
//   </div>
//   );
//   /* return React.createElement('p',null,"I am Person"); */
  
// }
class App extends Component {
  state ={
    books:[
      {bookName:"1984", writer:"Gerge Orwell"},
      {bookName:"Himu", writer:"Humayon Ahmed"}
    ]
  }

  render(){
    return(
      <div className="App">
       {/* <h1>Hello World</h1>
       <Person name="Rahim" age="32"> Children Property</Person>
       <Person name="Karim" age="50"/> */}
       <h1>---------Book List--------</h1>
       {/* <Book bookName="1984" writer="Gerge Orwell"/> 
       <Book bookName="Himu" writer="Humayon Ahmed"/> */}
       <Book bookName={this.state.books[0].bookName} writer={this.state.books[0].writer}/> 
       <Book bookName={this.state.books[1].bookName} writer={this.state.books[1].writer}/>

     </div>
    )
  }
}
export default App;
