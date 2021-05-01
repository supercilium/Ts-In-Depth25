import { timeout } from "../decorators";

export abstract class ReferenceItem {
    // title: string;
    // year: number;
    #id: number;
    //  private on TS side
    private _publisher: string;

    static department: string = 'static department';

    constructor(id: number, public title: string, protected year: number) {
        console.log('Creating a new ReferenceItem...');
        this.#id = id;
    }

    // getter
    get publisher(): string {
        return this._publisher.toLocaleUpperCase();
    }

    set publisher(newPublisher: string) {
        this._publisher = newPublisher;
    }

    // @timeout(1000)
    printItem(): void {
        console.log(`${this.title} was published in ${this.year}`);
        console.log(ReferenceItem.department);
    }

    getID(): number {
        return this.#id;
    }

    abstract printCitation(): void;
}