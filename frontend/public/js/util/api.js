
/**
 * Function to send request to api.
 * @param {*} endpoint URL endpoint for API.
 * @returns Response body (in json).
 */
export async function getData(endpoint) {
    const url = "/group20/api" + endpoint;
    try {
        const response = await fetch(url);

        const result = await response.json();
        return { result: result, status: response.status };
    } catch (err){
        throw err;
    }
}

export async function postData(endpoint, body) {
    const url = "/group20/api" + endpoint;
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        });

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

        return { result: await response.json(), status: response.status };
    } catch(err) {
        console.log("hey")
        throw err;
    }
}