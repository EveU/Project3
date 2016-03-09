var React = require('react');
var SongsList = require('./SongsList');

var SongsBox = React.createClass({
  render: function(){
    return(
      <div>
        <SongsList songs={this.props.songs}/>
      </div>
    )
  }
});

module.exports = SongsBox;