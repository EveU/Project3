var React = require('react');
var Nav = require('./Nav');
var BooksBox = require('./books/BooksBox');

var ResourcesBox = React.createClass({
  getInitialState: function() {
    return {books: [], currentBook: null, languageToLearn: null, proficiency: null }
  },

  setLanguage: function(language){
    this.setState( { languageToLearn: language } )
  },

  setProficiency: function(proficiency){
    this.setState( { proficiency: proficiency } )
  },

  setCurrentBook: function(book){
    this.setState( { currentBook: book } )
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
          var random = Math.floor(Math.random() * receivedBooks.length);
          this.setState({ currentBook: receivedBooks[random] });
        }
      }.bind(this)
      request.send(null);
  },

  render: function(){
    return(
        <div>
          <Nav onSelectLanguage={this.setLanguage} onSelectProficiency={this.setProficiency} ></Nav>
          <BooksBox books={this.state.books} book={this.state.currentBook} language={this.state.languageToLearn} proficiency={this.state.proficiency} onSelectBook={this.setCurrentBook}></BooksBox>
        </div>
    )
  }
});


module.exports = ResourcesBox;
