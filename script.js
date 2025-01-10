const myLibrary = [];

// the constructor function
function Book(title, author, pages, read) {
    // attributes
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
}
// methods
Book.prototype.info = function() {
    if(this.read === true) {
        return `${this.title} by ${this.author}, ${this.pages}, read.`
    } else {
        return `${this.title} by ${this.author}, ${this.pages}, not read yet.`
    }
}
// add book to myLibrary
function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read)
    myLibrary.push(book);
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 300, true);
addBookToLibrary("Star War", "George Lucas", 220, false);
console.log(myLibrary);