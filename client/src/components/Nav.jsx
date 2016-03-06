var React = require('react');
var SearchForm = require('./SearchForm');

var Nav = React.createClass({
  render: function(){
    return(
      <div id="nav">
        <div className="go-left">
          <h1> Languages Resources </h1>
        </div>
        <div className="go-right">
          <SearchForm></SearchForm>
        </div>
      </div>
    )
  }
});

module.exports = Nav;