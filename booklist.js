const addButton = document.getElementById('addinput');
const addTitle = document.getElementById('titleinput');
const addAuthor = document.getElementById('authorinput');
const removeButton

class book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    };
};
let bookList = [];

const addBook = (title, author) => {
    const newBook = new book(title, author);
    bookList.push(newBook);
};
addButton.addEventListener('click', (e) => {
    addBook(addTitle.value, addAuthor.value);
});

const removeBook = bookList.filter(book => book.title);