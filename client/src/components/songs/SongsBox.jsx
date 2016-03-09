var React = require('react');
var SongsList = require('./SongsList');

var SongsBox = React.createClass({
  render: function(){
    return(
      <div>
        <SongsList songs={this.props.songs} onSelectSong={this.props.onSelectSong}/>
      </div>
    )
  }
});

module.exports = SongsBox;