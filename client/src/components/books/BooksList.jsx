var React = require('react');

var BooksList = React.createClass({
  getInitialState: function(){
    return {selectedIndex: null}
  },

  handleClick: function(e){
    e.preventDefault;
    var index = e.currentTarget.value
    this.setState( {selectedIndex: index} );
    var currentBook = this.props.books[index];
    this.props.onSelectBook(currentBook);
  },

  displayBooks: function(){
    var listBookInfo = this.props.books;
    return listBookInfo.map(function(val, index){
      return(
        <li key={index} className="grid grid-3"> <img src={val.cover_image} /><h3>{val.title}</h3><p><small>by</small> {val.author} </p>
          <button value={index} onClick={this.handleClick} className={val.difficulty_level}> {val.language} | {val.difficulty_level}
          </button>
        </li>
        )
    }.bind(this));
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