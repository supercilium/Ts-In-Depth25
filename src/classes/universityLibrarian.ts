import * as Interfaces from "../interfaces";
import { sealed, logger, writable, logMethod, logParameter, format } from '../decorators';

// @sealed('UniversityLibrarian')
// @logger
export class UniversityLibrarian implements Interfaces.Librarian {
    public department: string;
    @format()
    public name: string;
    public email: string;
    f: number = 100;

    // @logMethod
    // assistCustomer(@logParameter custName: string) {
    assistCustomer(custName: string) {
        console.log(`${this.name} is assisting ${custName}`)
    }
    // @writable(true)
    assistFaculty() {
        console.log('Assisting faculty');
    }
    // @writable(false)
    teachCommunity() {
        console.log('Teaching community');
    }
}