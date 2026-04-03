class Card {
    #id;
    #image;
    #linkable;

    constructor(id, image, linkable) {
        this.#id = id;
        this.#image = image;
        this.#linkable = linkable;
    }

    createCard() {
        const card = document.createElement(this.#linkable ? "a" : "article");
        const heading = document.createElement("h2");
        const logo = document.createElement("img");

        card.classList.add("card");
        logo.src = this.#image;

        card.appendChild(heading);
        card.appendChild(logo);

        return [card, heading, logo];
    }

    get id() {
        return this.#id;   
    }

    get linkable() {
        return this.#linkable;
    }
}

export class PlayerCard extends Card {
    #firstName;
    #lastName;

    constructor(id, image, linkable, firstName, lastName) {
        super(id, image, linkable);
        this.#firstName = firstName;
        this.#lastName = lastName;
    }

    createPlayerCard() {
        let [card, heading, image] = this.createCard();

        card.classList.add("card--player");
        if(this.linkable) card.href = `../players/player?id=${this.id}`;

        heading.innerText = `${this.#firstName} ${this.#lastName}`;
        image.alt = `Portrait of ${this.#firstName} ${this.#lastName}`;

        return card;
    }

    static createPlayerCards(players) {
        const playersList = document.getElementById("players__list");
    
        players.forEach(player => {
            let playerObj = new PlayerCard(player.id, player.photo, true, player.firstName, player.lastName);
            
            let playerCard = playerObj.createPlayerCard();
            playersList.appendChild(playerCard);
    });
    }
    
}

export class TeamCard extends Card {
    #name;

    constructor(id, image, linkable, name) {
        super(id, image, linkable);
        this.#name = name;
    }

    createTeamCard() {
        let [card, heading, image] = this.createCard();

        card.classList.add("card--team");
        if(this.linkable) card.href = `/teams/team?id=${this.id}`;

        heading.innerText = this.#name;
        image.alt = `${this.#name} logo`;

        return card;
    }

    static createTeamCards(teams) {
        const teamsList = document.getElementById("teams__list");
        
        teams.forEach(team => {
        let teamObj = new TeamCard(team.id, team.image, true, team.name);
        let teamCard = teamObj.createTeamCard();
        teamsList.appendChild(teamCard);
    });
    }
}