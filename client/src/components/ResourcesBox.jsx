var React = require('react');
var BooksBox = require('./BooksBox');
var BookDisplay= require('./BookDisplay');

var ResourcesBox = React.createClass({
  getInitialState: function() {
    return {books: [], book: ''}
  },

  componentDidMount: function(){
    var booksUrl = "http://localhost:3000/books";
    var request = new XMLHttpRequest();
    request.open("GET", booksUrl);
    request.onload = function(){
        if(request.status === 200){
          // console.log('data received');
          var receivedBooks = JSON.parse(request.responseText);
          // console.log(receivedBooks);
          this.setState({ books: receivedBooks });
          this.setState({ book: receivedBooks[2] });
        }
      }.bind(this)
      request.send(null);
  },

  render: function(){
    return(
        <div>
          <h1> Languages Resources </h1>
          <BookDisplay book={this.state.book}></BookDisplay>
          <BooksBox books={this.state.books}></BooksBox>
        </div>
    )
  }
});


module.exports = ResourcesBox;
