var React = require('react');
var Nav = require('./Nav');
var BookDisplay = require('./BookDisplay');
var BooksBox = require('./BooksBox');

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
          // this.setState({ book: receivedBooks[2] });
        }
      }.bind(this)
      request.send(null);
  },

  render: function(){
    return(
        <div>
          <Nav></Nav>
          <BookDisplay book={this.state.book}></BookDisplay>
          <BooksBox books={this.state.books}></BooksBox>
        </div>
    )
  }
});


module.exports = ResourcesBox;
