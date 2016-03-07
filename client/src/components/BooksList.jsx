var React = require('react');

var BooksList = React.createClass({
  getInitialState: function(){
    return {selectedIndex: null}
  },

  handleClick: function(e){
    e.preventDefault;
    var index = e.target.value
    this.setState( {selectedIndex: index} );
    var currentBook = this.props.books[index];
    this.props.onSelectBook(currentBook);
  },

  displayBooks: function(){
    var listBookInfo = [];
    for(var book of this.props.books){
      if(!this.props.language || book.language === this.props.language){
        if(!this.props.proficiency || book.difficulty_level === 'Varied' || book.difficulty_level === this.props.proficiency){
          listBookInfo.push(book);
        }
      }
    }
    console.log('books', listBookInfo)
    return listBookInfo.map(function(value, index){
      return <li key={index} className="grid grid-3"> <img src={value.cover_image} /><h3>{value.title}</h3><p><small>by</small> {value.author} </p><button value={index} onClick={this.handleClick} className={value.difficulty_level}>{value.difficulty_level}</button></li>
    }.bind(this))
  },

  render: function(){
    return(
      <div>
        <h2> All Books </h2>
        <ul className="container">{this.displayBooks()}</ul>
      </div>
    );
  }
});

module.exports = BooksList;