import { staticHtml } from "../util/frontendUtil.js"

export async function index(req, res) {
    console.log(req.cookies.auth);
    res.sendFile(staticHtml("index.html"));
}

export async function teams(req, res) {
    res.sendFile(staticHtml("teams.html"));
}

export async function team(req, res) {
    res.sendFile(staticHtml("team.html"));
}

export async function players(req, res) {
    res.sendFile(staticHtml("players.html"));
}

export async function player(req, res) {
    res.sendFile(staticHtml("player.html"));
}

export async function register(req, res) {
    res.sendFile(staticHtml("register.html"));
}

export async function login(req, res) {
    res.sendFile(staticHtml("login.html"));
}


export async function playerAdmin(req, res) {
    res.sendFile(staticHtml("player-admin.html"));
}

export async function playersAdmin(req, res) {
    res.sendFile(staticHtml("players-admin.html"));
}

export async function teamAdmin(req, res) {
    res.sendFile(staticHtml("team-admin.html"));
}

export async function teamsAdmin(req, res) {
    res.sendFile(staticHtml("teams-admin.html"));
}