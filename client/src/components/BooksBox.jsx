var React = require('react');

var BooksBox = React.createClass({

  getInitialState: function() {
    return {books: []}
  },

  componentDidMount: function(){
    var url = "http://localhost:3000/books";
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = function(){
        if(request.status === 200){
          console.log('data received');
          var receivedBooks = JSON.parse(request.responseText);
          console.log(receivedBooks);
          this.setState({ books: receivedBooks });
        }
      }.bind(this)
      request.send(null);
  },

  render: function(){
    return(<h2> Books </h2>);
  }
});

module.exports = BooksBox;