/* Classes */
class Person {
    #firstName;
    #lastName;
    #born;
    #nationality;

    constructor(fistName, lastName, born, nationality) {
        this.#firstName = fistName;
        this.#lastName = lastName;
        this.#born = born;
        this.#nationality = nationality;
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
        if (typeof born !== "date") return;
        this.#born = born;
    }

    get nationality() {
        return this.#nationality;
    }

    set nationality(nationality) {
        if (typeof nationality !== "string") return;
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
        this.#role = role;
        this.#number = number;
        this.#photo = photo;
        this.#formerTeams = formerTeams;
    }

    get role() {
        return this.#role;
    }

    set role(role) {
        if (typeof role !== "string") return;
        this.#role = role;
    }

    get number() {
        return this.#number;
    }

    set number(number) {
        if (typeof number !== "number") return;
        this.#number = number;
    }

    get photo() {
        return this.#photo;
    }

    set photo(photo) {
        if (typeof photo !== "string") return; 
        this.#photo = photo;
    }

    get formerTeams() {
        return this.#formerTeams;
    }

    set formerTeams(formerTeams) {
        if (typeof formerTeams !== "array") return;
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

    static toHTML(p, parent) {
        if (!p || !parent) return;

        const article = document.createElement("article");
        article.classList.add("player");

        const fullName = document.createElement("h2");
        fullName.classList.add("player__full-name");
        fullName.innerText = `${p.firstName} ${p.lastName}`;
        fullName.title = "Full name";
        article.appendChild(fullName);

        const data = [
            [ "player__born", `${p.born.toDateString()}`, "Player birthdate" ],
            [ "player__nationality", `${p.nationality}`, "Player nationality" ],
            [ "player__role", `${p.role}`, "Player role" ],
            [ "player__number", `${p.number}`, "Player number" ],
        ];
        data.forEach(arr => {
            const element = document.createElement("p");
            element.classList.add(arr[0]);
            element.innerText = arr[1],
            element.title = arr[2];
            article.appendChild(element);
        });

        const photo = document.createElement("img");
        photo.classList.add("player__photo");
        photo.src = `../media/images/portraits/${p.firstName.toLowerCase()}_${p.lastName.toLowerCase()}.png`;
        photo.alt = `Portrait of the player ${p.firstName} ${p.lastName}`;
        article.appendChild(photo);

        const teamsList = document.createElement("ul");
        teamsList.classList.add("player__teams-list");
        p.formerTeams.forEach(team => {
            const item = document.createElement("li");
            item.classList.add("player__teams-list--item");
            item.innerText = team;
            teamsList.appendChild(item);
        });
        article.appendChild(teamsList);

        parent.appendChild(article);
    }

};

class Team {
    #title;
    #country;
    #city;

    constructor(title, country, city) {
        this.#title = title;
        this.#country = country;
        this.#city = city;
    }

    get title() {
        return this.#title;
    }

    set title(title) {
        if (typeof title !== "string") return;
        this.#title = title;
    }

    get country() {
        return this.#country;
    }
    
    set country(country) {
        if (typeof country !== "string") return;
        this.#country = country;
    }

    get city() {
        return this.#city;
    }

    set city(city){
        if (typeof city !== "string") return;
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