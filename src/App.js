import React from 'react';
import './App.css';

let App= () => {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Person/>
    </div>
  );
  /* return React.createElement('div',{className:"App"},React.createElement('h1',null,'Hello World'),<Person/>) */
}
let Person =() =>{
  return(
  <div>
    <h5>I am person</h5>
  </div>
  );
  /* return React.createElement('p',null,"I am Person"); */
  
}

export default App;
