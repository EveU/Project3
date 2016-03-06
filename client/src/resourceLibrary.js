var ResourceLibrary = function(){
  this.books = [];
}

ResourceLibrary.prototype = {
  addBook: function(book){
    this.books.push(book);
  },

  filterByLanguage: function(books, language){
    var filteredBooks = [];
    for (var book of books){
      if(language === book.language){
        filteredBooks.push(book);
      }
    }
    return filteredBooks;
  },

  filterByProficiency: function(books, proficiency){
    var filteredBooks = [];
    for (var book of books){
      if(proficiency === book.difficulty_level || book.difficulty_level === 'Varied'){
        filteredBooks.push(book);
      }
    }
    return filteredBooks;
  },

  filterBooks: function(language, proficiency){
    var filteredBooks = [];
    if(!language && !proficiency){
      return this.books;
    }else if(!proficiency){
      filteredBooks = this.filterByLanguage(this.books, language);
      console.log(filteredBooks);
    }else if(!language){
      filteredBooks = this.filterByProficiency(this.books, proficiency);
      console.log(filteredBooks);
    }else{    
      filteredBooks = this.filterByLanguage(this.books, language);
      console.log(filteredBooks);
      filteredBooks = this.filterByProficiency(filteredBooks, proficiency);
      console.log(filteredBooks);
    }
    return filteredBooks
  }

}


module.exports = ResourceLibrary;
