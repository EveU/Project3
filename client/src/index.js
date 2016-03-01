window.onload = function(){

  var url = "http://localhost:3000/books";
  var request = new XMLHttpRequest();
  request.open('GET', url);
  request.onload = function(){
    if(request.status === 200){
      console.log('data received');
      var books = JSON.parse(request.responseText) || [];
      console.log(books);
    }
  }
  request.send(null);

}