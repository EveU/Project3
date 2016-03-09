var React = require('react');
var SongsList = require('./SongsList');
var SongDisplay = require('./SongDisplay');

var SongsBox = React.createClass({
  render: function(){
    return(
      <div>
        <SongDisplay song={this.props.song}></SongDisplay>
        <SongsList songs={this.props.songs} onSelectSong={this.props.onSelectSong}/>
      </div>
    )
  }
});

module.exports = SongsBox;