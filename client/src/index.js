var React = require('react');
var ReactDOM = require('react-dom');

var ResourcesBox = require('./components/ResourcesBox');


window.onload = function(){
  ReactDOM.render(
    <ResourcesBox/>,
    document.getElementById('app')
  );
}