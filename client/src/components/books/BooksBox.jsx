var React = require('react');
var BookDisplay = require('./BookDisplay');
var BooksList = require('./BooksList');

var BooksBox = React.createClass({
  render: function(){
    return(
      <div>
        <BookDisplay book={this.props.book}></BookDisplay>
        <BooksList books={this.props.books} language={this.props.language} proficiency={this.props.proficiency} onSelectBook={this.props.onSelectBook}></BooksList>
      </div>
    )
  }
});

module.exports = BooksBox;