import { Book } from "../interfaces";

export class Reader {
    constructor(public name: string, public books: Book[] = []) { }
    take(book: Book): void {
        this.books.push(book);
    }
}