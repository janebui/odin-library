const form = document.querySelector('form');
const newbookBtn = document.querySelector('#newbook');
const input = document.querySelector('.title');
const add = document.querySelector('#add');
const list = document.querySelector('#booklist');
const clear = document.querySelector('#clear');


let myLibrary = [];

myLibrary.push(new Book("The Tipping Point", "Malcolm Gladwell", 180, 0))

// Constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.readToggle = function() {
    console.log('read toggle')
}

// create a new instance
function addBook(e) {
    e.preventDefault();

    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let read = document.getElementById('read').checked ? 1 : 0;

    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);

    displayBooks(myLibrary, list);

    this.reset();
}

function displayBooks(myLibrary, list) {
    list.innerHTML = myLibrary.map((book, i) => {
        return `
        <li data-index="${i}">
        ${book.title}
        ${book.author}
        ${book.pages}
        <span class="read-toggle">${book.read == 1 ? "Read" : "Not Read Yet"}</span>
        </li>
        `;
    }).join('');

}


newbookBtn.addEventListener('click', e => {
    document.querySelector('form').classList.toggle('hide')
})

form.addEventListener('submit', addBook);

displayBooks(myLibrary, list);




