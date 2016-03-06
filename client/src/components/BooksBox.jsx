var React = require('react');

var BooksBox = React.createClass({
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
      listBookInfo.push(book);
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

module.exports = BooksBox;