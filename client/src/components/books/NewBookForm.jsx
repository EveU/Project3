var React = require('react');

var NewBookForm = React.createClass({
  getInitialState: function() {
    return {book: {}};
  },

  //"title", "author", "cover_image", "genre", "language", "difficulty_level", "difficulty_desc", "description"

  handleBookChange: function(e) {
    this.setState({book: e.target.value});
  },

  handleSubmit: function(e) {
    e.preventDefault();
    var title = e.target.title.value.trim();
    var author = e.target.author.value.trim();
    // var image = e.target.image.value.trim();
    // var genre = e.target.genre.value.trim();
    // var desc = e.target.desc.value.trim();
    // var language = e.target.language.value.trim();
    // var diff_level = e.target.diff_level.value.trim();
    // var diff_reasons = e.target.diff_reasons.value.trim();
    
    var book = {title: title, author: author}

    // if (!title || !author) {
    //   alert("Please complete all fields");
    //   return;
    // }

    this.props.onBookSubmit({book: book});
    // this.setState( {book: {} });
  },

  render: function(){

    return(
      <div>
        <hr/>
        <h2>Add a New Book:</h2>
        <form onSubmit={this.handleSubmit}>
          <input type="text" id="title" placeholder="Title"></input>
          <input type="text" id="author" placeholder="Author"></input>
          <input type="text" id="image" placeholder="Cover Image (url)"></input>
          <br/>
          <br/>
          <input type="text" id="genre" placeholder="Genre"></input>
          <input type="text" id="desc" placeholder="Description"></input>
          <br/>
          <br/>
          <input type="text" id="language" placeholder="Language"></input>
          <input type="text" id="diff_level" placeholder="Difficulty Level"></input>
          <input type="text" id="diff_reasons" placeholder="Difficulty Reasons"></input>
          <br/>
          <br/>
          <input type="submit" value="Add Book"></input>
        </form>
      </div>
    )
  }
});

module.exports = NewBookForm;