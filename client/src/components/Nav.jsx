var React = require('react');
var SearchForm = require('./SearchForm');

var Nav = React.createClass({

  handleTabSelect: function(e){
    e.preventDefault;
    console.log(e.currentTarget.value);
    var tab = e.currentTarget.value;
    this.props.onSelectTab(tab);
  },

  render: function(){
    return(
      <div id="nav">
        <div className="go-left">
          <h1> Languages Resources </h1>
        </div>
        <div className="go-right">
          <SearchForm onSelectLanguage={this.props.onSelectLanguage} onSelectProficiency={this.props.onSelectProficiency} ></SearchForm>
        </div>
        <nav id="tabs">
          <ul>
            <li><button value="books" onClick={this.handleTabSelect}>Books</button></li>
            <li><button id="lastButton" value="songs" onClick={this.handleTabSelect}>Songs</button></li>
          </ul>
        </nav>
      </div>
    )
  }
});

module.exports = Nav;