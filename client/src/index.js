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