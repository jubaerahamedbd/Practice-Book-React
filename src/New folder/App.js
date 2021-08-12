import React, { Component } from 'react';
import './App.css';
import Book from './Components/Book'


class App extends Component {
  state = {
    books: [
      { id:1, bookName: "1984", writer: "George Orwell" },
      { id:2, bookName: "The Da Vinci Code", writer: "Dan Brown" },
      { id:3, bookName: "The Alchemist", writer: "Paulo Coelho" }
    ],
    ShowBooks: true
  }

  deleteBookState = index =>{
    //const books = this.state.books.slice;
    //const books = this.state.books.map(item => item)
    const books = [...this.state.books]
    books.splice(index,1);
    this.setState(
      {
        books:books
      }
    )
  }

  changeWithInputState = (event,index) => {
    const book= {
      ...this.state.books[index]
    }
    book.bookName = event.target.value;
    const books = [...this.state.books]
    books[index] = book;
    this.setState({
      books:books
    });
  }
  toggleBookList =()=>{
    this.setState({ShowBooks:!this.state.ShowBooks});
  }

  render() {
    const style = {
      border: "1px solid red",
      borderRadius: "5px",
      backgroundColor: "black",
      color: "white",
    };

    //const booksState = this.state.books;

    const books = this.state.books.map((book,index) => {
      return(
        <Book 
        bookName={book.bookName} 
        writer={book.writer} 
        delete={ ()=>this.deleteBookState(index)} 
        inputName={(event)=>this.changeWithInputState(event,index)}
        key={book.id}

        />
      )
    });

   

    return (
      <div className="App">
        <h1 style={style}>Book List</h1>
        <button onClick={this.toggleBookList}>Toggle Button</button>
        {this.state.ShowBooks ? books:null}
      </div>
    );
  }
}

export default App;
