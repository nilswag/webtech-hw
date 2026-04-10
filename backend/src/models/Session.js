
export class Session {
    #id;
    #userId;
    #token;
    #expires;

    constructor(id, userId, token, expires) {
        this.#id = id;
        this.#userId = userId;
        this.#token = token;
        this.#expires = expires;
    }

    get id() {
        return this.#id;
    }

    get userId() {
        return this.#userId;
    }

    get token() {
        return this.#token;
    }

    get expires() {
        return this.#expires;
    }

    static from(obj) {
        const { 
            id = null,
            userId = null,
            token = null,
            expires = null,
        } = obj || {};
        
        if (!userId) throw new Error("Missing userId parameter.");
        if (!token) throw new Error("Missing token parameter.");
        if (!expires) throw new Error("Missing expires parameter.");
        return new Session(id, userId, token, expires);
    }    
}