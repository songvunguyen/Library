let myLibrary = [];

function Book(title, author, pages, read) {
    this.index = myLibrary.length-1;
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
    //remove old card if exist
    let cards = document.querySelectorAll(".card");
    if(cards != undefined){
        cards.forEach((card) => {
            card.remove();
        });
    }
    for (const book of myLibrary) {
        let temp = document.createElement('div');
        let p = document.createElement("pre");
        p.textContent = `Title: ${book.title}\nAuthor: ${book.author}\nPages: ${book.pages}\nRead: ${book.read}`;
        let r = document.createElement('button');
        r.textContent = "Remove";
        r.classList.add("remove");
        r.addEventListener("click", () => {removeBook(book)});
        temp.appendChild(p);
        temp.appendChild(r);
        temp.classList.add("card");
        temp.style.cssText = "display: inline-block";
        document.querySelector("#container").appendChild(temp);       
    }
}

//Add new book to library based on the submited form info
function submitForm(form){
    let book = new Book(form.elements['title'].value, form.elements['author'].value, form.elements['pages'].value, form.elements['read'].checked);
    addBookToLibrary(book);
    form.reset();
    form.style.display = "none";
    displayBook();
}

//Remove book from library
function removeBook(book){
    myLibrary.splice(book.index,1);
    displayBook();
}

// let one = new Book("hi", "hello", 200, false);
// let two = new Book("hi", "hello", 200, false);
// let three = new Book("hi", "hello", 200, false);

// addBookToLibrary(one);
// addBookToLibrary(two);
// addBookToLibrary(three);

//Display form when new book button click on
let newBook = document.querySelector("#new");
newBook.addEventListener('click', function () {
    document.querySelector('#newBook').style.display = "block";
});

//Add event listener to submit button
let submit = document.querySelector("#submit");
submit.addEventListener('click', () => {submitForm(document.querySelector("#newBook"))});
   
displayBook();