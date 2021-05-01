import { Person, Book, Author } from "./interfaces";

type PersonBook = Person & Book;
type BookOrUndefined = Book | undefined;
type BookProperties = keyof Book;

export { PersonBook, BookProperties, BookOrUndefined }

export type BookRequiredFields = Required<Book>;
export type UpdatedBook = Partial<Book>;
export type AuthorWoEmail = Omit<Author, 'email'>;
export type СreateCustomerFunctionType = (name: string, age?: number, city?: string) => void;