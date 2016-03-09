var React = require('react');

var SongDisplay = React.createClass({
  render: function(){
    if(this.props.song){
      var embedLink = "https://www.youtube.com/embed/" + this.props.song.video_url;
      return(
        <div className="container">
          <div className="grid grid-8">
            <iframe width="450" height="350" src={embedLink} frameBorder="0" allowFullScreen></iframe>
          </div>
          <div className="grid grid-4">
            <h2>{this.props.song.title}</h2>
            <h3>{this.props.song.artist}</h3>
            <hr/>
            <h4>{this.props.song.language} ({this.props.song.difficulty})</h4>
            <p>{this.props.song.description}</p>
          </div>
          <br/>
        </div>
      )
    }else{
      return <div/>
    }
  }
});

module.exports = SongDisplay;