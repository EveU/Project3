var React = require('react');

var SearchForm = React.createClass({
  render: function(){
    return(
      <form>
        <input
        type="text"
        placeholder="Language"
        // value={this.state.language}
        // onChange={this.handleLanguageChange}
        />
        <input
        type="text"
        placeholder="Level"
        // value={this.state.difficulty}
        // onChange={this.handleDifficultyChange}
        />
        <input type="submit" value="Search" />
      </form>
      )
  }
});

module.exports = SearchForm;