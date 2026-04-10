import { staticHtml } from "../util/frontendUtil.js"

export async function index(req, res) {
    res.sendFile(staticHtml("index.html"));
}

export async function teams(req, res) {
    res.sendFile(staticHtml(req.isAdmin ? "teams-admin.html" : "teams.html"));
}

export async function team(req, res) {
    res.sendFile(staticHtml(req.isAdmin ? "team-admin.html" : "team.html"));
}

export async function players(req, res) {
    res.sendFile(staticHtml(req.isAdmin ? "players-admin.html" : "players.html"));
}

export async function player(req, res) {
    res.sendFile(staticHtml(req.isAdmin ? "player-admin.html" : "player.html"));
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

export async function profile(req, res) {
    res.sendFile(staticHtml("profile.html"));
}