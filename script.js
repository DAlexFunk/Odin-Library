function Book(title, author, pageCount, isRead) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.isRead = isRead;

    this.info = () => {
        if (isRead) {
            return `${this.title} by ${this.author}, ${this.pageCount} pages, read`
        }

        return `${this.title} by ${this.author}, ${this.pageCount} pages, not read`
    }
}

function addBookToLibrary(book) {
    library.push(book);
}


const library = [];

// Books for testing
theHobbit = new Book("The Hobbit", "JRR Tolkien", 304, false);
darkAge = new Book("Dark Age", "Pierce Brown", 750, true);
scythe = new Book("Scythe", "Neal Shusterman", 443, true);