
/**
 * Function to send request to api.
 * @param {*} endpoint URL endpoint for API.
 * @returns Response body (in json).
 */
export async function getData(endpoint) {
    // this needs to be changed to either /group20/api or /api depending on local development or not
    const url = "/api" + endpoint;
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Response status: ${response.status}`);

        const result = await response.json();
        return result;
    } catch (err){
        throw err;
    }
}