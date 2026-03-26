import { staticHtml } from "../../util/frontendUtil.js"

export async function index(req, res) {
    res.status(200).sendFile(staticHtml("index.html"));
}

export async function register(req, res) {
    res.status(200).sendFile(staticHtml("register.html"));
}