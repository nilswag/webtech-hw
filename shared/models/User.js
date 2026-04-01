
export class User {
    #firstName;
    #lastName;
    #email;
    #password;

    constructor(firstName, lastName, email, password) {
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#email = email;
        this.#password = password;
    }

    get firstName() {
        return this.#firstName;
    }

    get lastName() {
        return this.#lastName;
    }

    get email() {
        return this.#email;
    }

    get password() {
        return this.#password;
    }

    static from(obj) {
        const { 
            firstName = null,
            lastName = null,
            email = null,
            password = null
        } = obj || {};
        
        if (!firstName) throw new Error("Missing firstName parameter.");
        if (!lastName) throw new Error("Missing lastName parameter.");
        if (!email) throw new Error("Missing email parameter.");
        if (!password) throw new Error("Missing password parameter.");
        return new User(firstName, lastName, email, password);
    }
}