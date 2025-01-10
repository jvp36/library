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
// add book to myLibrary function
function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read)
    myLibrary.push(book);
}
// render table function
function renderTable(array) {
    $tbody.innerHTML = "";
    array.forEach(element => {
        const $row = document.createElement("tr");  
        const $title = document.createElement("td");
        $title.textContent = element.title;
        const $autor = document.createElement("td");
        $autor.textContent = element.author;
        const $pages = document.createElement("td");
        $pages.textContent = element.pages;
        const $info = document.createElement("td");
        $info.textContent = element.info();        
        const $delete = document.createElement("td");
        const $delBtn = document.createElement("button");
        $delBtn.classList.add("btn");
        $delBtn.textContent = "Delete";
        $delete.appendChild($delBtn);         
        const $edit = document.createElement("td");
        const $editBtn = document.createElement("button");
        $editBtn.classList.add("btn");
        $editBtn.textContent = "Edit";
        $edit.appendChild($editBtn);
        $row.append($title, $autor, $pages, $info, $delete, $edit);
        $tbody.appendChild($row);
    });
    $table.style.display = "block";    
}
function displayFormNewBook() {
    $formNewBook.style.display = "block";
}
// DOM variables
const $addNewBook = document.getElementById("new-book");
const $formNewBook = document.getElementById("form-new");
const $inputTitle = document.getElementById("title");
const $inputAuthor = document.getElementById("author");
const $inputPages = document.getElementById("pages");
const $inputRead = document.getElementById("read");
const $saveNewBook = document.getElementById("save");
const $table = document.getElementById("table");
const $tbody = document.getElementById("tbody");
// DOM events
$addNewBook.addEventListener("click", displayFormNewBook);
$saveNewBook.addEventListener("click", (e) => {
    e.preventDefault();
    let title = $inputTitle.value;
    let author = $inputAuthor.value;
    let pages = $inputPages.value;
    let isRead = $inputRead.checked;
    addBookToLibrary(title, author, pages, isRead);
    renderTable(myLibrary);
    $formNewBook.reset();
    $formNewBook.style.display ="none";
    console.log(myLibrary); 
})


//addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 300, true);
//addBookToLibrary("Star War", "George Lucas", 220, false);
//renderTable(myLibrary);

//console.log($table);
//console.log(myLibrary);