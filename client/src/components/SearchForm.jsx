var React = require('react');

var SearchForm = React.createClass({
  getInitialState: function() {
    return {selectedLanguage: 'all', selectedDifficulty: 'all'}
  },

  handleLanguageChange: function(e){
    e.preventDefault;
    var language = e.target.value;
    this.setState( {selectedLanguage: language} );
    this.props.onSelectLanguage(language);
  },

  handleDifficultyChange: function(e){
    e.preventDefault;
    var difficulty = e.target.value;
    this.setState( {selectedDifficulty: difficulty} );
    this.props.onSelectProficiency(difficulty);
  },

  render: function(){
    return(
      <form>
        <select value={this.state.selectedLanguage} onChange={this.handleLanguageChange} >
          <option value="">Choose a language...</option>
          <option value="English">English</option>
          <option value="Spanish">Spanish</option>
        </select>
        <select value={this.state.selectedDifficulty} onChange={this.handleDifficultyChange}>
          <option value="">Select your level...</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
      </form>
      )
  }
});

module.exports = SearchForm;