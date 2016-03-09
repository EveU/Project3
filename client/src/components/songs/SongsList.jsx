var React = require('react');

var SongsList = React.createClass({
  displaySongs: function(){
    var listSongInfo = this.props.songs;
    if(listSongInfo.length > 0){
      return listSongInfo.map(function(val, index){
        var embedLink = "https://www.youtube.com/embed/" + val.video_url
        return(
          <li key={index} className="grid songs">
            <iframe width="210" height="155" src={embedLink} frameborder="0" allowfullscreen></iframe>
            <h3>{val.title}</h3>
            <p><small>by</small> {val.artist} </p>
            <button value={index} className={val.difficulty}> {val.language} | {val.difficulty}
            </button>
          </li>
          )
      }.bind(this));
    }else{
      return(<h4>Sorry, no songs match your search.</h4>)
    }
  },

  render: function(){
    return(
      <div>
        <h2>All Songs</h2>
        <ul className="container">{this.displaySongs()}</ul>
      </div>
    )
  }
});

module.exports = SongsList;