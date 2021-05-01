import { Category } from "./enum";

interface Book {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
    pages?: number;
    // markDamaged?: (reason: string): void;
    markDamaged?: DamageLogger;
}

interface DamageLogger {
    (p: string): void;
}

interface Library {
    lib: string;
    books: number;
    avgPagesPerBook: number;
}

interface Person {
    name: string;
    email: string;
}

interface Author extends Person {
    numBooksPublished: number;
}

interface Librarian extends Person {
    department: string;
    assistCustomer: (custName: string) => void;
}

interface Magazine {
    title: string;
    publisher: string;
}

interface ShelfItem {
    title: string;
}

interface LibMgrCallback {
    (err: Error, titles: string[]): void;
}

interface Callback<T> {
    (err: Error, data: T): void;
}

export { Librarian, Author, Person, Library, DamageLogger as Logger, Book, Magazine, ShelfItem, LibMgrCallback, Callback }