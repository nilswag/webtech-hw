import { error } from "../util/logging.js";

/**
 * Function to send request to api.
 * @param {*} endpoint URL endpoint for API.
 * @returns Response body (in json).
 */
export async function getData(endpoint) {
    const url = "http://localhost:8020/api" + endpoint;
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Response status: ${response.status}`);

        const result = await response.json();
        return result
    } catch (err){
        error(err);
    }
}