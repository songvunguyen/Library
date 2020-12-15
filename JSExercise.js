let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = () => {read ? title+ " by " +author+ ", "+pages+ "pages, already read" : title+ " by " +author+ ", "+pages+ "pages, not read yet" };
}

function addBookToLibrary(book) {
    // do stuff here
    myLibrary.push(book);
}

function displayBook() {
    for (const book of myLibrary) {
        let temp = document.createElement('div');
        let p = document.createElement("pre");
        p.textContent = `Title: ${book.title}\nAuthor: ${book.author}\nPages: ${book.pages}\nRead: ${book.read}`;
        temp.appendChild(p);
        temp.classList.add("card");
        temp.style.cssText = "display: inline-block";
        document.querySelector("#container").appendChild(temp);
    }
}

let one = new Book("hi", "hello", 200, false);
let two = new Book("hi", "hello", 200, false);
let three = new Book("hi", "hello", 200, false);

addBookToLibrary(one);
addBookToLibrary(two);
addBookToLibrary(three);

let newBook = document.querySelector("#new");
newBook.addEventListener('click', function () {
    document.querySelector('#newBook').style.display = "block";
});

let submit = document.querySelector("#submit");
submit.addEventListener('click', function () {
    let form = document.querySelector("#newBook").elements;
    let book = new Book(form[0], form[1], form[2], form[3]);
    addBookToLibrary(book);
    document.querySelector('#newBook').style.display = "none";
    displayBook();
});
