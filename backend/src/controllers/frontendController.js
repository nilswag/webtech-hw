import { staticHtml } from "../../util/frontendUtil.js"

export async function index(req, res) {
    res.sendFile(staticHtml("index.html"));
}

export async function about(req, res) {
    res.sendFile(staticHtml("about.html"));
}

export async function crew(req, res) {
    res.sendFile(staticHtml("crew.html"));
}

export async function history(req, res) {
    res.sendFile(staticHtml("history.html"));
}

export async function results(req, res) {
    res.sendFile(staticHtml("results.html"));
}

export async function americasCup(req, res) {
    res.sendFile(staticHtml("americas_cup.html"));
}