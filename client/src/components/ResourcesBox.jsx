var React = require('react');
var BooksBox = require('./BooksBox');

var ResourcesBox = React.createClass({

  render: function(){
    return(
        <div>
          <h1> Languages Resources </h1>
          <BooksBox/>
        </div>
    )
  }
});


module.exports = ResourcesBox;
