var React = require('react');

var BooksBox = React.createClass({

  displayBooks: function() {
    var listBookInfo = this.props.library.filterBooks(this.props.language, this.props.proficiency);
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