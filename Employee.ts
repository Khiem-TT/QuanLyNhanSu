export class Employee {
    private _firstname: string;
    private _lastname: string;
    private _birthday: Date;
    private _address: string;
    private _role: string;
    private _id: number;

    constructor(firstname: string, lastname: string, birthday: Date, address: string, role: string, id: number) {
        this._firstname = firstname;
        this._lastname = lastname;
        this._birthday = birthday;
        this._address = address;
        this._role = role;
        this._id = id;
    }

    getFirstname(): string {
        return this._firstname;
    }

    setFirstname(value: string) {
        this._firstname = value;
    }

    getLastname(): string {
        return this._lastname;
    }

    setLastname(value: string) {
        this._lastname = value;
    }

    getBirthday(): Date {
        return this._birthday;
    }

    setBirthday(value: Date) {
        this._birthday = value;
    }

    getAddress(): string {
        return this._address;
    }

    setAddress(value: string) {
        this._address = value;
    }

    getRole(): string {
        return this._role;
    }

    setRole(value: string) {
        this._role = value;
    }

    getId(): number {
        return this._id;
    }

    setId(value: number) {
        this._id = value;
    }
}