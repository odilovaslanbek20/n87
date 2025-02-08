function Book(bookName, bookAuthor, bookYear, bookGenre) {
    this.bookName = bookName;
    this.bookAuthor = bookAuthor;
    this.bookYear = bookYear;
    this.bookGenre = bookGenre;
    Book.prototype.getSummary = function () {
        return `Kitob nomi: ${bookName}, Kitob muallifi: ${bookAuthor}, Chop etilgan ${bookYear},`;
    }
    console.log(this.getSummary());
    
    Book.prototype.isClassic = function (bookYear, year) {
        let a = year - bookYear;

        if (a >= 20) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
    this.isClassic(this.bookYear, year)
}

let date = new Date();
let year = date.getFullYear();

let Book1 = new Book('Un capitaine de quinze ans', 'Jules Verne', '1876', 'Adventure novel');
let Book2 = new Book('Dunyoning ishlari', 'Abdulla Qodiriy', '1925', 'psixologik-sarguzasht');
let Book3 = new Book('Shum bola', 'Abdulla Qahhor', '1938', 'ijtimoiy-psixologik');
let Book4 = new Book("O'tgan kunlar", 'Hamza Hakimzoda Niyoziy', '1914', 'ijtimoiy-psixologik');
console.log(Book1);
console.log(Book2);
console.log(Book3);
console.log(Book4);

