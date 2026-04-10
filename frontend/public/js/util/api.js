
/**
 * Function to send request to api.
 * @param {*} endpoint URL endpoint for API.
 * @returns Response body (in json).
 */
export async function getData(endpoint) {
    const url = "/group20/api" + endpoint;
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Response status: ${response.status}`);

        const result = await response.json();
        return { result: result, status: response.status };
    } catch (err){
        throw err;
    }
}

export async function deleteData(endpoint) {
    const url = "/group20/api" + endpoint;
    try {
        const response = await fetch(url, {method: "DELETE"});
        if(!response.ok) throw new Error(`Response status: ${response.status}`);

        console.log("Hello")
        return await response.json();
    } catch(err) {
        console.log("hey")
        throw err;
    }
}