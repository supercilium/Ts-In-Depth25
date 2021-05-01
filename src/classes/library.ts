import { onChangeField } from "../decorators";

export class Library {
    @onChangeField(Library.onChange) id: number;
    name: string;
    address: string;

    @onChangeField(Library.onChange) email: string;

    // static onChangeEmail(self: Library, newValue: string): void {
    //     console.log(`${self.name} changed email from '${self.email}' to '${newValue}'`);
    // }
    static onChange(self: Library, newValue: string, propName: keyof Library): void {
        console.log(`${self.name} changed ${propName} from '${self[propName]}' to '${newValue}'`);
    }
}