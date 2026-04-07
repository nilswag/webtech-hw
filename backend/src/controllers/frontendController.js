import { staticHtml } from "../util/frontendUtil.js"

export async function index(req, res) {
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

export async function logout(req, res) {
    res.redirect("api/users/logout");
}