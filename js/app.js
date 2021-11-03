"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("./enums");
const util = require("./lib/utilityFunctions");
require("./LibrarianExtension");
/// Destructuring
// function PrintBookInfo({title: booktitle, author: bookauthor}: Book): void {
//     console.log(`${booktitle} was authored by ${bookauthor}`);
// }
// let [book1, book2] = util.GetAllBooks();
// function LogFavoriteBooks([book1, book2, ...others]: Book[]) {
//     PrintBookInfo(book1);
//     PrintBookInfo(book2);
// }
// LogFavoriteBooks(util.GetAllBooks());
// let { title: booktitle, author: bookauthor } = book1;
// console.log(booktitle);
// console.log(bookauthor);
/// Spread
// let schoolBooks: Book[] = [
//     { id: 10, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', available: true, category: Category.Fiction },
//     { id: 11, title: 'Crime and Punishment', author: 'Fyador Dostoevsky', available: true, category: Category.Fiction},
//     { id: 12, title: 'Clear Light of Day', author: 'Anita Desai', available: true, category: Category.Fiction}
// ];
// let booksRead: Book[] = util.GetAllBooks();
// booksRead.push(...schoolBooks);
// console.log(booksRead);
// let poets: string[] = ['Shelley', 'Collins', 'Hughes'];
// let authors: string[] = ['Tolstoy', 'Fitzgerald', ...poets];
// console.log(authors);
/// Tuples
// let catalogLocation: [string, Book] = ['A 123.456', book1];
// interface KeyValuePair<K, V> extends Array<K | V> {
//     0: K;
//     1: V;
// }
// let catalogLocation: KeyValuePair<string, Book> = ['A 123.456', book1];
/// Intersections and Unions
// let allBooks: Book[] = util.GetAllBooks();
// let allMagazines: Magazine[] = util.GetAllMagazines();
// let readingMaterial: Book | Magazine = allMagazines[0]; // <-- Union
// function PrintTitle(item: Book | Magazine): void {
//     console.log(item.title);
// }
// PrintTitle(allBooks[0]);
// PrintTitle(allMagazines[0]);
// let serialNovel: Book & Magazine = { // <-- Intersection
//     id: 100, title: 'The Gradual Tale', author: 'Occasional Pen', available: true, category: Category.Fiction, publisher: 'Serial Press'
// };
/// Mixins
// function applyMixins(derivedCtor: any, baseCtor: any[]) {
//     baseCtor.forEach(baseCtor => {
//         Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
//             derivedCtor.prototype[name] = baseCtor.prototype[name];
//         });
//     });
// }
// applyMixins(UniversityLibrarian, [Employee, Researcher]);
// let newLibrarian = new UniversityLibrarian();
// newLibrarian.doResearch('Economics');
/// String Literals and Type Aliases
// let frequency: 'monthly' | 'annually' = 'annually';
// type Frequency = 'monthly' | 'annually';
// function getMagazineByFrequency(preferredFrequency: Frequency) {
// }
/// Polymorphic 'this'
// class LibraryBook {
//     Checkout(): this {
//         let thisType = this instanceof ChildrensBook ? 'ChildrensBook' : 'ElectronicsBook';
//         console.log(`Checking out a ${thisType}`)
//         return this;
//     }
//     Checkin(): this {
//         let thisType = this instanceof ChildrensBook ? 'ChildrensBook' : 'ElectronicsBook';
//         console.log(`Checking in a ${thisType}`)
//         return this;
//     }
// }
// class ChildrensBook extends LibraryBook {
//     Clean(): this {
//         console.log('Cleaning a book');
//         return this;
//     }
// }
// let kidbook = new ChildrensBook();
// kidbook.Checkin().Clean();
/// Declaration Merging
// let mergedBook: Book;
// mergedBook.publisher = 'Programming Press';
// let newLibrarian = new UniversityLibrarian();
// newLibrarian.phone = '555-1212'
/// Type Guards
// function LogVisitor(param: number | string) {
//     if (typeof param === 'number') {
//         console.log(`${param} new visitors arrived`);
//     } else {
//         console.log(`${param} visited`);
//     }
// }
// LogVisitor(5);
// LogVisitor('Somebody');
// let lib: Librarian = new PublicLibrarian();
// if (lib instanceof UniversityLibrarian) {
//     lib.assistFaculty();
// }
// if (lib instanceof PublicLibrarian) {
//     lib.teachCommunity();
// }
// function isBook(text: Book | Magazine): text is Book {
//     return (<Book>text).author !== 'undefined';
// }
// let readingMaterial: Book | Magazine = util.GetAllBooks()[0];
// if (isBook(readingMaterial)) {
//     console.log(`The book's author is ${readingMaterial.author}`);
// } else {
//     console.log(`The magazine's publisher is ${readingMaterial.publisher}`);
// }
/// Symbols
// let mySymbol = Symbol('first_symbol');
// let anotherSymbol = Symbol('first_symbol');
// console.log(mySymbol === anotherSymbol);
// console.log(typeof mySymbol);
// let myObject = {
//     [mySymbol]: 'value for my symbol key'
// }
// console.log(myObject);
// let librarian = new UniversityLibrarian();
// librarian[CLASS_INFO]();
// let libraryCustomer = {
//     name: 'Thorne',
//     assistCustomer: (custName: string) => console.log(`Assisting ${custName}`)
// };
// if (libraryCustomer instanceof UniversityLibrarian) {
//     console.log('A helpful librarian');
// } else {
//     console.log('Not a librarian');
// }
// let lib1 = new UniversityLibrarian();
// let lib2 = new PublicLibrarian();
// try {
//     lib1.assistFaculty = () => console.log('assistFaculty replacement method');
//     lib2.teachCommunity = () => console.log('teachCommunity replacement method');
// } catch (error) {
//     console.log(error.message);
// }
// lib1.assistFaculty();
// lib2.teachCommunity();
/// Async Callbacks
// interface LibMgrCallback {
//     (err: Error, titles: string[]): void
// }
// function getBooksByCategory(cat: Category, callback: LibMgrCallback): void {
//     setTimeout(() => {
//         try {
//             let foundBooks: string[] = util.GetBookTitlesByCategory(cat);
//             if (foundBooks.length > 0) {
//                 callback(null, foundBooks);
//             } else {
//                 throw new Error('No books found.')
//             }
//         } catch (error) {
//             callback(error, null);
//         }
//     }, 2000);
// }
// function logCategorySearch(err: Error, titles: string[]): void {
//     if (err) {
//         console.log(`Error message: ${err.message}`);
//     } else {
//         console.log(`Found the following titles:`);
//         console.log(titles);
//     }
// }
// console.log(`Beginning search...`);
// getBooksByCategory(Category.Fiction, logCategorySearch);
// console.log(`Search submitted...`);
/// Async Promises
// function getBooksByCategory(cat: Category): Promise<string[]> {
//     let p: Promise<string[]> = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let foundBooks: string[] = util.GetBookTitlesByCategory(cat);
//             if (foundBooks.length > 0) {
//                 resolve(foundBooks);
//             } else {
//                 reject(`No books found for that category.`);
//             }
//         }, 2000);
//     });
//     return p;
// }
// console.log(`Beginning search...`);
// getBooksByCategory(Category.Fiction)
//     .then(titles => {
//         console.log(`Found titles: ${titles}`)
//         return titles.length;
//     }, reason => { return 0; })
//     .then(numOfBooks => console.log(`Number of books found ${numOfBooks}`))
//     .catch(reason => console.log(reason));
// console.log(`Search submitted...`);
/// Async - Async/Await
function getBooksByCategory(cat) {
    let p = new Promise((resolve, reject) => {
        setTimeout(() => {
            let foundBooks = util.GetBookTitlesByCategory(cat);
            if (foundBooks.length > 0) {
                resolve(foundBooks);
            }
            else {
                reject(`No books found for that category.`);
            }
        }, 2000);
    });
    return p;
}
function logSearchResults(bookCategory) {
    return __awaiter(this, void 0, void 0, function* () {
        let foundBooks = yield getBooksByCategory(bookCategory);
        console.log(foundBooks);
    });
}
console.log(`Beginning search...`);
logSearchResults(enums_1.Category.Fiction)
    .catch(reason => console.log(reason));
console.log(`Search submitted...`);
//# sourceMappingURL=app.js.map