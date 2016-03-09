var React = require('react');
var BookDisplay = require('./BookDisplay');
var BooksList = require('./BooksList');
var NewBookForm = require('./NewBookForm');

var BooksBox = React.createClass({
  render: function(){
    return(
      <div className="container">
      <BookDisplay book={this.props.book}></BookDisplay>
      <BooksList books={this.props.books} language={this.props.language} proficiency={this.props.proficiency} onSelectBook={this.props.onSelectBook}></BooksList>
      <NewBookForm onBookSubmit={this.props.onBookSubmit}></NewBookForm>
      </div>
    )
  }
});

module.exports = BooksBox;