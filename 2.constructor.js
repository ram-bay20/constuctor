// Constructor //
function Book(title, author, year) {
     this.title = title;
     this.author = author;
     this.year = year;

     this.summary = function() {
          return `${this.title} was written by ${this.author} in ${this.year}`;
     };
}

const book1 = new Book('Harry Potter','J.K Rowling','1994');
const book2 = new Book('General Theory of Relativity','Albert Einstein','1905');

console.log(book1.title);
console.log(book2.author);
console.log(book1);
console.log(book2);