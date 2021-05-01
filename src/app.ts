/* eslint-disable no-redeclare */

import { getTitles, createCustomerID, getAllBooks, purge, getProperty, createCustomer, getBooksByCategory, logCategorySearch, getBooksByCategoryPromise, logSearchResults } from "./functions";
import { Book, Logger, Author, Librarian, Magazine } from "./interfaces";
import { Category } from "./enum";
import { UniversityLibrarian, RefBook, Shelf } from "./classes";
import { PersonBook, BookRequiredFields, UpdatedBook, СreateCustomerFunctionType } from "./types";
import { Library } from './classes/library'
function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

showHello('greeting', 'TypeScript');

// logFirstAvailable(getAllBooks());
// logBookTitles(getBookTitlesByCategory(Category.JavaScript));
// console.log(getBookAuthorByIndex(1));
// console.log(calcTotalPages());

// ======================
// 03.01
let idGenerator: (p1: string, p2: number) => string = (name: string, id: number) => `${id}-${name}`;

idGenerator = createCustomerID;
let myID = createCustomerID('Ann', 10);
myID = idGenerator('Boris', 2);

// console.log(myID);
// console.log(myID);

// ============================
// 03.02

// logBookTitles(getBookTitlesByCategory());
// logFirstAvailable();

// console.log(getBookByID(1));

// const myBooks = сheckoutBooks('Ann', 1, 2, 4);
// console.log(myBooks);


// ============================
// 03.03


const checkedOutBooks = getTitles(false);
// console.log(checkedOutBooks);

// ============================
// 03.04
// console.log(bookTitleTransform('123'))
// console.log(bookTitleTransform(123))

// 04.01

const MyBook: Book = {
    id: 5,
    title: 'Colors, Backgrounds, and Gradients', author: 'Eric A. Meyer',
    available: true,
    category: Category.CSS,
    pages: 200,
    markDamaged: (reason) => {
        console.log(`Damaged: ${reason}`)
    }
}

// printBook(MyBook);
// MyBook.markDamaged('missing back cover');

// 04.02
let logDamage: Logger;
logDamage = (reason: string) => {
    console.log(`Damaged: ${reason}`)
}
// logDamage('missing back cover');

// 04.03


const favoriteAuthor: Author = {
    name: 'Karl',
    email: 'Karl@email.com',
    numBooksPublished: 3,
}

// const favoriteLibrarian: Librarian = {
//     name: 'Karl',
//     email: 'karl@email.com',
//     department: 'classical literature',
//     assistCustomer: (custName: string) => console.log(custName),
// }

// 04.04
const offer: any = {
    book: {
        title: 'Essential TypeScript',
    }
}

// console.log(offer.magazine);
// console.log(offer.magazine?.getTitle());
// console.log(offer.book?.getTitle?.());
// console.log(offer.book.authors?.[0]);

// 04.05

// console.log(getProperty(getAllBooks()[0], 'markDamaged'));
// console.log(getProperty(getAllBooks()[0], 'isbn'));

// 05.01


// const ref: ReferenceItem = new ReferenceItem(100, 'I love', 2021);
// ref.publisher = 'FGDG ddd';
// console.log(ref.publisher);
// console.log(ref.getID());

// 05.02
// const refBook = new RefBook(1, 'I love', 2021, 2);
// console.log(refBook);
// refBook.printItem();

// 05.03
// refBook.printCitation();

// 05.04
// const favoriteLibrarian: Librarian = new UniversityLibrarian('classical literature', 'Karl', 'karl@email.com')
// favoriteLibrarian.assistCustomer('Anna');

// 05.05
const personalBook: PersonBook = {
    name: 'Karl',
    email: 'karl@email.com',
    id: 1,
    title: 'Title',
    author: 'Author',
    available: true,
    category: Category.CSS,
    pages: 1500,
}
// console.log(personalBook);

// 06.05
const flag = false;
if (flag) {
    import('./classes')
        .then(classes => {
            const reader = new classes.Reader('Karl', []);
            reader.take(getAllBooks()[1])
            console.log(reader)
        })
}

// 06.06
let lib: Library = {
    id: 1,
    name: 'Karl',
    address: 'Unknown',
};
const libObject = new Library;
// console.log(lib)

// 07.01
const inventory = [
    { id: 10, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
    { id: 11, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
    { id: 12, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
    { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
];

// console.log(purge<Book>(inventory))
// console.log(purge([1, 2, 3, 4]))

const bookShelf = new Shelf<Book>();
inventory.forEach(book => bookShelf.add(book));
const firstBook = bookShelf.getFirst();
// console.log(bookShelf);
// console.log(firstBook);

const magazines: Magazine[] = [
    { title: 'Programming Language Monthly', publisher: 'Code Mags' },
    { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
    { title: 'Five Points', publisher: 'GSU' }
];
// const magazineShelf = new Shelf<Magazine>();
// magazines.forEach(magazine => magazineShelf.add(magazine));
// console.log(magazineShelf.getFirst())
// magazineShelf.printTitles();
// console.log(magazineShelf.find('Five Points'))

// const res = getProperty(getAllBooks()[1], 'available');
// console.log(res);
// const mag = getProperty(magazines[0], 'publisher');
// console.log(mag);

// 07.04
const book: BookRequiredFields = {
    author: 'Anna',
    available: true,
    category: Category.CSS,
    id: 51,
    markDamaged: null,
    pages: 123,
    title: 'Title'
}

const updatedBook: UpdatedBook = {
    id: 1,
    category: Category.JavaScript,
}

// const params: Parameters<СreateCustomerFunctionType> = ['Anna']
// createCustomer(...params);

// 08.01, 08.02
// const obj = new UniversityLibrarian();
// obj.name = 'Anna';
// obj['printLibrarian']();
// UniversityLibrarian.A = '1';
// const proto = Object.getPrototypeOf(obj);
// proto.A = '1';

// 08.03
// obj.assistFaculty = null;
// obj.teachCommunity = null;
// console.log(obj);

// 08.04
// const enc = new RefBook(1, 'I love', 2021, 2);
// enc.printItem();

// 08.05, 08.06
// const obj = new UniversityLibrarian();
// obj.name = 'Anna';
// obj.assistCustomer('Boris');
// console.log(obj)

// 08.07
// const enc = new RefBook(1, 'I love', 2021, 2);
// enc.copies = 10;
// console.log(enc);

// 09.01
// console.log('begin')
// getBooksByCategory(Category.JavaScript, logCategorySearch);
// getBooksByCategory(Category.Software, logCategorySearch);
// console.log('end')

// 09.02
// console.log('begin')
// getBooksByCategoryPromise(Category.JavaScript)
//     .then(data => {
//         console.log(data)
//         return data.length;
//     })
//     .then(len => {
//         console.log(len);
//     })
//     .catch(err => console.log(err))
//     .finally(() => console.log('Promise is resolved or rejected'));

// getBooksByCategoryPromise(Category.Software)
//     .then(data => console.log(data))
//     .catch(err => console.log(err))
//     .finally(() => console.log('Promise is resolved or rejected'));
// console.log('end')


// 09.03
console.log('begin')
const p = logSearchResults(Category.Software)
    .then(data => console.log(data))
    .catch(err => console.log(err))
console.log(p)
console.log('end')
