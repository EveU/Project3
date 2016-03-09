var React = require('react');

var NewBookForm = React.createClass({

  handleSubmit: function(e) {
    e.preventDefault();
    var title = e.target.title.value.trim();
    var author = e.target.author.value.trim();
    var image = e.target.image.value.trim();
    var genre = e.target.genre.value.trim();
    var desc = e.target.desc.value.trim();
    var language = e.target.language.value.trim();
    var diff_level = e.target.diff_level.value.trim();
    var diff_reasons = e.target.diff_reasons.value.trim();
    
    if ( !title || !author || !image || !genre || !desc || !language || !diff_level || !diff_reasons ) {
      window.alert("Please complete all fields");
      return;
    }

    var book = {title:title, author:author, cover_image:image, genre:genre, description:desc, language:language, difficulty_level:diff_level, difficulty_desc:diff_reasons}

    this.props.onBookSubmit(book);
  },

  render: function(){
    return(
      <div>
        <hr/>
        <h2>Add a New Book:</h2>
        <form onSubmit={this.handleSubmit} className="container">
          <select id="language">
            <option value=''>Language...</option>
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
          </select>
          <select id="diff_level">
            <option value=''>Difficulty level...</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
            <option value="Varied">Varied</option>
          </select>
          <br/>
          <br/>
          <input type="text" id="title" placeholder="Title"></input>
          <input type="text" id="author" placeholder="Author"></input>
          <input type="text" id="image" placeholder="Cover Image (url)"></input>
          <input type="text" id="genre" placeholder="Genre"></input>
          <br/>
          <br/>
          <textarea rows={5} cols={83} id="desc" placeholder="Add a brief description of what this book is about..."></textarea>
          <textarea rows={5} cols={83} id="diff_reasons" placeholder="Explain why the book is suitable for the difficulty level given..."></textarea>
          <br/>
          <br/>
          <input type="submit" value="Add Book"></input>
        </form>
      </div>
    )
  }
});

module.exports = NewBookForm;