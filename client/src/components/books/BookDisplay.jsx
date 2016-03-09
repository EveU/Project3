var React = require('react');

var BookDisplay = React.createClass({
  render: function(){
    if(this.props.book){
    return(
      <div className="container">
        <img className="main-book grid grid-4" src={this.props.book.cover_image} />
        <div className="grid grid-8">
          <h2 className={this.props.book.difficulty_level}>{this.props.book.title} ({this.props.book.language})</h2>
          <h3>{this.props.book.author}</h3>
          <h4>Difficulty: {this.props.book.difficulty_level}</h4>
          <p>{this.props.book.difficulty_desc}</p>
          <h4>Description:</h4>
          <p> {this.props.book.description}</p>
        </div>
        <br/>
      </div>
    )
    }else{
      return <div/>
    }
  }
});

module.exports = BookDisplay;