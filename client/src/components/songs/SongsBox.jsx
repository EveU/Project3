var React = require('react');
var SongsList = require('./SongsList');
var SongDisplay = require('./SongDisplay');
var NewSongForm = require('./NewSongForm');

var SongsBox = React.createClass({
  render: function(){
    return(
      <div>
        <SongDisplay song={this.props.song}></SongDisplay>
        <SongsList songs={this.props.songs} onSelectSong={this.props.onSelectSong}/>
        <NewSongForm onSongSubmit={this.props.onSongSubmit}></NewSongForm>
      </div>
    )
  }
});

module.exports = SongsBox;