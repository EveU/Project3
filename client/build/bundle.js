/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	var getBooks = function(){ 
	  var url = "http://localhost:3000/books";
	  var request = new XMLHttpRequest();
	  request.open('GET', url);
	  request.onload = function(){
	    if(request.status === 200){
	      console.log('data received');
	      var books = JSON.parse(request.responseText) || [];
	      console.log(books);
	
	      var booksList = document.getElementById('books-list');
	      for(book of books){
	        var bookInfo = document.createElement('li');
	        bookInfo.innerText = book.title;
	        booksList.appendChild(bookInfo);
	      }
	
	      // localStorage.setItem('storedBooks', JSON.stringify(books));
	    }
	  }
	  request.send(null);
	}  
	
	
	window.onload = function(){
	  // var books = JSON.parse(localStorage.getItem('storedBooks')) || [];
	  getBooks();
	}

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map