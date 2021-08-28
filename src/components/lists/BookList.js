import React, { Component } from 'react';
import Book from '../representational/Book';



class BookList extends Component{
    constructor(props){
        super(props);
        console.log("BookList Constructor")
    }
    UNSAFE_componentWillMount(){
        console.log("BookList componentWillMount");
    }
    componentDidMount(){
        console.log("BookList componentDidMount");
    }

    UNSAFE_componentWillReceiveProps(nextProps){
        console.log("U BookList componentWillReceiveProps")
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log("U BookList shouldComponentUpdate")
        return true;
    }
    UNSAFE_componentWillUpdate(nextProps,nextState){
        console.log("U BookList componentWillUpdate")
    }
    componentDidUpdate(){
        console.log("U BookList componentDidUpdate")
    }


    render(){
        console.log("BookList render");
        return (
            this.props.books.map((book, index) => {
                return (
                    <Book
                        bookName={book.bookName}
                        writer={book.writer}
                        delete={() => this.props.deleteBookState(index)}
                        key={book.id}
                        inputName={(event) => this.props.changeWithInputState(event, index)}
                    />
                );
            })
        );

    }
    
}

export default BookList;