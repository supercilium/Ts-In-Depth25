import { onChangeField } from "../decorators";

export class Library {
    @onChangeField<Library, number>(Library.onChange) id: number;
    name: string;
    address: string;

    @onChangeField<Library, string>(Library.onChange) email: string;

    // static onChangeEmail(self: Library, newValue: string): void {
    //     console.log(`${self.name} changed email from '${self.email}' to '${newValue}'`);
    // }
    static onChange(self: Library, newValue: unknown, propName: keyof Library): void {
        console.log(`${self.name} changed ${propName} from '${self[propName]}' to '${newValue}'`);
    }
}