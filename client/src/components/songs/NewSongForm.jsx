var React = require('react');

var NewSongForm = React.createClass({

  handleSubmit: function(e) {
    e.preventDefault();
    var title = e.target.title.value.trim();
    var artist = e.target.artist.value.trim();
    var video = e.target.video.value.trim();
    var genre = e.target.genre.value.trim();
    var language = e.target.language.value.trim();
    var difficulty = e.target.difficulty.value.trim();
    var desc = e.target.desc.value.trim();
    
    if ( !title || !artist || !video || !genre || !desc || !language || !difficulty ) {
      window.alert("Please complete all fields");
      return;
    }

    var song = {title:title, artist:artist, video_url:video, genre:genre, language:language, difficulty:difficulty, description:desc}

    this.props.onSongSubmit(song);
  },

  render: function(){
    return(
      <div>
        <hr/>
        <h2>Add a New Song:</h2>
        <form onSubmit={this.handleSubmit} className="container">
          <select id="language">
            <option value=''>Language...</option>
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
          </select>
          <select id="difficulty">
            <option value=''>Difficulty level...</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
          <br/>
          <br/>
          <input type="text" id="title" placeholder="Title"></input>
          <input type="text" id="artist" placeholder="Artist"></input>
          <input type="text" id="video" placeholder="Youtube link (11 digit code)"></input>
          <input type="text" id="genre" placeholder="Genre"></input>
          <br/>
          <br/>
          <textarea rows={5} cols={83} id="desc" placeholder="Explain why the song is suitable for the difficulty level given..."></textarea>
          <br/>
          <br/>
          <input type="submit" value="Add Song"></input>
        </form>
      </div>
    )
  }
});

module.exports = NewSongForm;