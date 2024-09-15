function Book(title, author, pageCount, isRead) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.isRead = isRead;
}

Book.prototype.info = function() {
    if (this.isRead) {
        return `${this.title} by ${this.author}, ${this.pageCount} pages, read`;
    }

    return `${this.title} by ${this.author}, ${this.pageCount} pages, not read`;
}

Book.prototype.createDiv = function() {
    const newBook = document.createElement("div")
    newBook.setAttribute("class", "book");

    const title = document.createElement("p");
    title.setAttribute("id", "bookTitle");
    title.textContent = this.title
    newBook.appendChild(title);

    const author = document.createElement("p");
    author.textContent = `By: ${this.author}`
    newBook.appendChild(author);

    const pageCount = document.createElement("p");
    pageCount.textContent = `Page Count: ${this.pageCount}`
    newBook.appendChild(pageCount);

    const isRead = document.createElement("p");
    isRead.textContent = this.isRead ? "Read" : "Not Read";
    newBook.appendChild(isRead);

    return newBook;
}


function getInputs() {
    const inputs = [];
    textInputs.forEach((element) => {inputs.push(element.value)})
    inputs.push(readInput.value === "true" ? true : false);

    return inputs;
}

function addInputsToLibrary(inputs) {
    nextBook = new Book(inputs[0], inputs[1], Number(inputs[2]), inputs[3]);

    library.push(nextBook);
}

function updateLibrary() {
    while (libraryArea.firstChild) {
        libraryArea.removeChild(libraryArea.lastChild);
    }

    library.forEach((book) => {
        const bookDiv = book.createDiv();
        libraryArea.appendChild(bookDiv);
    })
}

function actionOnPress() {
    const inputs = getInputs();
    addInputsToLibrary(inputs);
    updateLibrary();

    textInputs.forEach((input) => input.value = "");
}


const libraryArea = document.querySelector("#bookDisplay");
const submitButton = document.querySelector("#addButton");
const textInputs = document.querySelectorAll("input")
const readInput = document.querySelector("#isRead");

const library = [];

submitButton.addEventListener("click", () => {
    actionOnPress();
    // addInputsToLibrary();
    // textInputs.forEach((input) => input.value = "");
});