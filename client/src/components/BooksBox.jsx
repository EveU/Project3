var React = require('react');

var BooksBox = React.createClass({

  getInitialState: function() {
    return {books: []}
  },

  displayBooks: function() {
    var listBookInfo = [];
    for(var book of this.state.books){
      listBookInfo.push(book);
    }
    console.log('books', listBookInfo)
    return listBookInfo.map(function(value, index){
      return <li key={index} className="grid grid-3"> <img src={value.cover_image} /><h3>{value.title}</h3> <p><small>by</small> {value.author} </p><button value={index} onClick={this.handleClick}>More info</button></li>
    }.bind(this))
  },

  componentDidMount: function(){
    var url = "http://localhost:3000/books";
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = function(){
        if(request.status === 200){
          // console.log('data received');
          var receivedBooks = JSON.parse(request.responseText);
          // console.log(receivedBooks);
          this.setState({ books: receivedBooks });
        }
      }.bind(this)
      request.send(null);
  },

  render: function(){
    return(
      <div>
        <h2> Books </h2>
        <ul className="container">{this.displayBooks()}</ul>
      </div>
    );
  }
});

module.exports = BooksBox;