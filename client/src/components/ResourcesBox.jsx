var React = require('react');
var Nav = require('./Nav');
var BooksBox = require('./books/BooksBox');

var ResourcesBox = React.createClass({
  getInitialState: function() {
    return {books: [], filteredBooks: [], currentBook: null, language: null, proficiency: null }
  },

  filterBooks: function(){
    var books = [];
    for(var book of this.state.filteredBooks){
      if(!this.state.language || book.language === this.state.language){
        if(!this.state.proficiency || book.difficulty_level === 'Varied' || book.difficulty_level === this.state.proficiency){
          books.push(book);
        }
      }
    }
    console.log('books', books);
    this.setState( { filteredBooks: books } );
  },

  setLanguage: function(language){
    this.setState( { language: language },
    this.filterBooks()
     )
  },

  setProficiency: function(proficiency){
    this.setState( { proficiency: proficiency } );
    this.filterBooks();
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
          this.setState({ filteredBooks: receivedBooks });
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
        <BooksBox books={this.state.filteredBooks} book={this.state.currentBook} language={this.state.language} proficiency={this.state.proficiency} onSelectBook={this.setCurrentBook}></BooksBox>
      </div>
    )
  }
});


module.exports = ResourcesBox;
