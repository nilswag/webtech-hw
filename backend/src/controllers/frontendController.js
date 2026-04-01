import { staticHtml } from "../util/frontendUtil.js"

export async function index(req, res) {
    console.log(req.cookies.auth);
    res.sendFile(staticHtml("index.html"));
}

export async function register(req, res) {
    res.sendFile(staticHtml("register.html"));
}

export async function login(req, res) {
    res.sendFile(staticHtml("login.html"));
}