/* Classes */
class Person {
    #firstName;
    #lastName;
    #born;
    #nationality;

    constructor(fistName, lastName, born, nationality) {
        this.firstName = fistName;
        this.lastName = lastName;
        this.born = born;
        this.nationality = nationality;
    }

    get firstName() {
        return this.#firstName;
    }

    set firstName(firstName) {
        this.#firstName = firstName;
    }

    get lastName() {
        return this.#lastName;
    }

    set lastName(lastName) {
        this.#lastName = lastName;
    }

    get born() {
        return this.#born;
    }

    set born(born) {
        this.#born = born;
    }

    get nationality() {
        return this.#nationality;
    }

    set nationality(nationality) {
        this.#nationality = nationality;
    }
};

class Player extends Person {
    #role;
    #number;
    #photo;
    #formerTeams;

    constructor(firstName, lastName, born, nationality, role, number, photo, formerTeams){
        super(firstName, lastName, born,  nationality);
        this.role = role;
        this.number = number;
        this.photo = photo;
        this.formerTeams = formerTeams;
    }

    get role() {
        return this.#role;
    }

    set role(role) {
        this.#role = role;
    }

    get number() {
        return this.#number;
    }

    set number(number) {
        this.#number = number;
    }

    get photo() {
        return this.#photo;
    }

    set photo(photo) {
        this.#photo = photo;
    }

    get formerTeams() {
        return this.#formerTeams;
    }

    set formerTeams(formerTeams) {
        this.#formerTeams = formerTeams;
    }

    static fromJSON(o) {
        if (!o) return null;
        return new Player(
            o.firstName,
            o.lastName,
            new Date(o.born),
            o.nationality,
            o.role,
            o.number,
            o.photo,
            o.formerTeams
        );
    }
};

class Team {
    #title;
    #country;
    #city;

    constructor(title, country, city) {
        this.title = title;
        this.country = country;
        this.city = city;
    }

    get title() {
        return this.#title;
    }

    set title(title) {
        this.#title = title;
    }

    get country() {
        return this.#country;
    }
    
    set country(country) {
        this.#country = country;
    }

    get city() {
        return this.#city;
    }

    set city(city){
        this.#city = city;
    }

    static fromJSON(o) {
        if (!o) return null;
        return new Team(
            o.title,
            o.country,
            o.city
        );  
    }
};