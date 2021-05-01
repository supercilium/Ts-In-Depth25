import { Book, LibMgrCallback, Callback } from "./interfaces";
import { BookProperties, BookOrUndefined } from "./types";
import { Category } from "./enum";

export const getAllBooks = () => {
    const books = <const>[
        { id: 1, title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true, category: Category.JavaScript },
        { id: 2, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false, category: Category.JavaScript },
        { id: 3, title: 'CSS Secrets', author: 'Lea Verou', available: true, category: Category.CSS },
        { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true, category: Category.JavaScript }
    ];
    return books;
};

export const logFirstAvailable = (books: readonly Book[] = getAllBooks()): void => {
    console.log(`Quantity of books: ${books.length}`);
    books.some(book => {
        if (book.available) {
            console.log(`First available book: ${book.title}`);
        }
        return book;
    });
};

export const getBookTitlesByCategory = (category: Category = Category.JavaScript): Array<string> => {
    const books = getAllBooks();
    return books.filter(book => book.category === category).map(book => book.title);
};

export const logBookTitles = (titles: string[]): void => {
    titles.forEach(title => console.log(title));
};

export const getBookAuthorByIndex = (index: number): [string, string] => {
    const book = getAllBooks()[index];
    return [book.title, book.author];
};



export const calcTotalPages = (): BigInt => {
    const libraries = <const>[
        { lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
        { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
        { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 }
    ];

    return libraries.reduce((acc, item) => acc + BigInt(item.books * item.avgPagesPerBook), 0n);
};
export const createCustomerID = (name: string, id: number): string => `${id}-${name}`;

export const createCustomer = (name: string, age?: number, city?: string): void => {
    console.log(`Customer name - ${name}`);
    if (age) console.log(`Customers age - ${age}`);
    if (city) console.log(`Customers city - ${city}`);
};

export const getBookByID = (id: Book['id']): BookOrUndefined => getAllBooks().find(book => book.id === id);

export const сheckoutBooks = (customer: string, ...bookIDs: number[]): Book['title'][] => {
    console.log(customer);
    return bookIDs.map(id => getBookByID(id)).filter(book => book.available).map(book => book.title);
};

export function getTitles(available: boolean): Book[];
export function getTitles(author: string): Book[];
export function getTitles(id: string, available: boolean): Book[];

export function getTitles(...args: any[]): any {
    const books = getAllBooks();
    if (args.length === 1) {
        if (typeof args[0] === 'string') {
            return books.filter(book => book.author === args[0])
        }
        if (typeof args[0] === 'boolean') {
            return books.filter(book => book.available === args[0])
        }
    }
    if (typeof args[0] === 'number' && typeof args[1] === 'boolean') {
        return books.filter(book => book.available === args[1] && book.id === args[0]);
    }
}


export function assertStringValue(arg: any): asserts arg is string {
    if (typeof arg !== "string") {
        throw new Error("value should have been a string");
    }
}

export const bookTitleTransform = (name: any) => {
    assertStringValue(name);
    return [...name].reverse().join();
}
export const printBook = (book: Book) => {
    console.log(`${book.title} by ${book.author}`);
}
export const getProperty = <TObject, TKey extends keyof TObject>(book: TObject, prop: TKey): TObject[TKey] | string => {
    if (typeof book[prop] === 'function') {
        const f = book[prop];
        return book[prop]['name'];
    }
    return book[prop];
}

export const purge = <T>(inventory: Array<T>): Array<T> => inventory.slice(2);

export function getBooksByCategory(category: Category, callback: Callback<string[]>): void {
    setTimeout(() => {
        try {
            const titles = getBookTitlesByCategory(category);
            if (titles.length) {
                callback(null, titles);
            } else {
                throw new Error('No books found.')
            }
        } catch (err) {
            callback(err, null);
        }
    }, 2000)
}

export function logCategorySearch(err: Error, titles: string[]): void {
    if (err) {
        console.log(err.message)
    } else {
        console.log(`Titles: ${titles}`)
    }
}

export function getBooksByCategoryPromise(category: Category) {
    const p: Promise<string[]> = new Promise<string[]>((resolve, reject) => {
        setTimeout(() => {
            const titles = getBookTitlesByCategory(category);
            if (titles.length) {
                resolve(titles);
            } else {
                reject('No books found.')
            }
        }, 2000)
    })

    return p;
}

export const logSearchResults = async (param: Category) => {
    const titles: string[] = await getBooksByCategoryPromise(param);
    console.log(titles)
    return titles;
}