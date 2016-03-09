var React = require('react');
var Nav = require('./Nav');
var BooksBox = require('./books/BooksBox');
var SongsBox = require('./songs/SongsBox');

var ResourcesBox = React.createClass({
  getInitialState: function() {
    return {activeTab: "books", language: null, proficiency: null, books: [], filteredBooks: [], currentBook: null, songs: [], filteredSongs: [], currentSong: null }
  },

  setActiveTab: function(tab){
    this.setState({activeTab: tab}, function(){
      this.setDisplay();
    });
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

  filterSongs: function(){
    var songs = [];
    for(var song of this.state.songs){
      if(!this.state.language || (song.language === this.state.language)){
        if(!this.state.proficiency || (song.difficulty_level === this.state.proficiency)){
          songs.push(song);
        }
      }
    }
    console.log('filtered songs', songs);
    this.setState( { filteredSongs: songs }, function(){
      var random = Math.floor(Math.random() * songs.length);
      this.setCurrentSong(songs[random]);
    });
  },

  setLanguage: function(language){
    this.setState({language: language}, function () {
        console.log(this.state.language);
        this.filterBooks();   
        this.filterSongs();   
    });    
  },

  setProficiency: function(proficiency){
    this.setState( { proficiency: proficiency } ,function (){
      console.log(this.state.proficiency);
      this.filterBooks();
      this.filterSongs();
    });
  },

  setCurrentBook: function(book){
    this.setState( { currentBook: book } )
  },

  setCurrentSong: function(song){
    this.setState( { currentSong: song } )
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

  getSongs: function(){
    var url = "http://localhost:3000/songs";
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = function(){
      if(request.status === 200){
        var data = JSON.parse(request.responseText);
        this.setState({ songs: data });
        this.setState({ filteredSongs: data });
        var random = Math.floor(Math.random() * data.length);
        this.setState({ currentSong: data[random] });
      }
    }.bind(this)
    request.send(null);
  },

  componentDidMount: function(){
    this.getBooks();
    this.getSongs();
    // this.setDisplay();
  },

  handleBookSubmit: function(book) {
    var books = this.state.books;
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

  handleSongSubmit: function(song) {
    var songs = this.state.songs;
    var newSongs = songs.concat([song]);
    this.setState({songs: newSongs});

    var request = new XMLHttpRequest();
    request.open('POST', 'http://localhost:3000/songs');
    request.setRequestHeader("Content-Type", "application/json");
    request.onload = function(){
      if(request.status === 200){
        var receivedSongs = JSON.parse(request.responseText);
        this.setState({ songs: receivedSongs }, function () {
            this.filterSongs();   
        });
      }
    }.bind(this)
    request.send( JSON.stringify(song) );
  },

  render: function(){
    var partial;
    if(this.state.activeTab === "books"){
      return(
        <div>
          <Nav onSelectLanguage={this.setLanguage} onSelectProficiency={this.setProficiency} onSelectTab={this.setActiveTab}></Nav>
          <BooksBox books={this.state.filteredBooks} book={this.state.currentBook} language={this.state.language} proficiency={this.state.proficiency} onSelectBook={this.setCurrentBook} onBookSubmit={this.handleBookSubmit}></BooksBox>
        </div>
      )
    }else if(this.state.activeTab === "songs"){
      return(
        <div>
          <Nav onSelectLanguage={this.setLanguage} onSelectProficiency={this.setProficiency} onSelectTab={this.setActiveTab}></Nav>
          <SongsBox songs={this.state.filteredSongs} song={this.state.currentSong} onSelectSong={this.setCurrentSong} onSongSubmit={this.handleSongSubmit}></SongsBox>
        </div>
      )
    }
  }
});


module.exports = ResourcesBox;
