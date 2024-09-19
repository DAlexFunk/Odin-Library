class Book {
    constructor(title, author, pageCount, isRead, index) {
        this.title = title;
        this.author = author;
        this.pageCount = pageCount;
        this.isRead = isRead;
        this.index = index;
    }
    
    createDiv() {
        const newBook = document.createElement("div")
        newBook.setAttribute("class", "book");

        const deleteButton = document.createElement("button");
        deleteButton.setAttribute("id", "delete");
        deleteButton.textContent = "X";
        deleteButton.addEventListener("click", () => {
            Library.contents.splice(this.index, 1);
            newBook.remove();
            Library.contents.forEach((book) => book.updateIndex());
        });
        newBook.appendChild(deleteButton);

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

        const updateButton = document.createElement("button");
        updateButton.textContent = "Update";
        updateButton.setAttribute("id", "updateStatus");
        updateButton.addEventListener("click", () => {
            this.isRead = !this.isRead;
            Library.updateLibrary();
        });
        newBook.appendChild(updateButton);

        return newBook;
    }

    updateIndex() {
        this.index = Library.contents.indexOf(this);
    }
}

const Library = {
    contents: [],

    addInputsToLibrary: function(inputs) {
        nextBook = new Book(inputs[0], inputs[1], Number(inputs[2]), inputs[3], Library.contents.length);

        Library.contents.push(nextBook);
    },

    updateLibrary: function() {
        while (libraryArea.firstChild) {
            libraryArea.removeChild(libraryArea.lastChild);
        }
    
        Library.contents.forEach((book) => {
            const bookDiv = book.createDiv();
            libraryArea.appendChild(bookDiv);
        })
    }
}


function getInputs() {
    const inputs = [];
    textInputs.forEach((element) => {inputs.push(element.value)})
    inputs.push(readInput.value === "true" ? true : false);

    return inputs;
}

function actionOnPress() {
    const inputs = getInputs();
    Library.addInputsToLibrary(inputs);
    Library.updateLibrary();

    textInputs.forEach((input) => input.value = "");
}


const libraryArea = document.querySelector("#bookDisplay");
const submitButton = document.querySelector("#addButton");
const textInputs = document.querySelectorAll("input")
const readInput = document.querySelector("#isRead");

submitButton.addEventListener("click", actionOnPress);