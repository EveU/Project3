var React = require('react');
var Nav = require('./Nav');
var BooksBox = require('./books/BooksBox');
var SongsBox = require('./songs/SongsBox');

var ResourcesBox = React.createClass({
  getInitialState: function() {
    return {language: null, proficiency: null, books: [], filteredBooks: [], currentBook: null, songs: [], songsFiltered: [], currentSong: null }
  },

  filterBooks: function(){
    var books = [];
    for(var book of this.state.books){
      if(!this.state.language || (book.language === this.state.language)){
        if(!this.state.proficiency || (book.difficulty_level === 'Varied') || (book.difficulty_level === this.state.proficiency)){
          books.push(book);
        }
      }
    }
    console.log('filtered books', books);
    this.setState( { filteredBooks: books }, function(){
      var random = Math.floor(Math.random() * books.length);
      this.setCurrentBook(books[random]);
    });
  },

  setLanguage: function(language){
    this.setState({language: language}, function () {
        console.log(this.state.language);
        this.filterBooks();   
    });    
  },

  setProficiency: function(proficiency){
    this.setState( { proficiency: proficiency } ,function (){
      console.log(this.state.proficiency);
      this.filterBooks();
    });
  },

  setCurrentBook: function(book){
    this.setState( { currentBook: book } )
  },

  getBooks: function(){
    var booksUrl = "http://localhost:3000/books";
    var request = new XMLHttpRequest();
    request.open("GET", booksUrl);
    request.onload = function(){
      if(request.status === 200){
        var receivedBooks = JSON.parse(request.responseText);
        this.setState({ books: receivedBooks });
        this.setState({ filteredBooks: receivedBooks });
        var random = Math.floor(Math.random() * receivedBooks.length);
        this.setState({ currentBook: receivedBooks[random] });
      }
    }.bind(this)
    request.send(null);
  },

  componentDidMount: function(){
    this.getBooks();
  },

  handleBookSubmit: function(book) {
    var books = this.state.books;
    // book.id = Date.now();
    var newBooks = books.concat([book]);
    this.setState({books: newBooks});

    var request = new XMLHttpRequest();
    request.open('POST', 'http://localhost:3000/books');
    request.setRequestHeader("Content-Type", "application/json");
    request.onload = function(){
      if(request.status === 200){
        var receivedBooks = JSON.parse(request.responseText);
        this.setState({ books: receivedBooks }, function () {
            console.log(this.state.language);
            this.filterBooks();   
        });
      }
    }.bind(this)
    request.send( JSON.stringify(book) );

  },

  render: function(){
    return(
      <div>
        <Nav onSelectLanguage={this.setLanguage} onSelectProficiency={this.setProficiency} ></Nav>
        <BooksBox books={this.state.filteredBooks} book={this.state.currentBook} language={this.state.language} proficiency={this.state.proficiency} onSelectBook={this.setCurrentBook} onBookSubmit={this.handleBookSubmit}></BooksBox>
      </div>
    )
  }
});

        // <SongsBox></SongsBox>

module.exports = ResourcesBox;
