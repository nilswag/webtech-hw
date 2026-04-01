
export class User {
    #id;
    #firstName;
    #lastName;
    #email;
    #password;

    constructor(id, firstName, lastName, email, password) {
        this.#id = id;
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#email = email;
        this.#password = password;
    }


    get id() {
        return this.#id;
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
            id = null,
            firstName = null,
            lastName = null,
            email = null,
            password = null
        } = obj || {};

        if (!firstName) throw new Error("Missing firstName parameter.");
        if (!lastName) throw new Error("Missing lastName parameter.");
        if (!email) throw new Error("Missing email parameter.");
        if (!password) throw new Error("Missing password parameter.");
        return new User(id, firstName, lastName, email, password);
    }
}