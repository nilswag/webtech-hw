
export function handleResponse(response) {
    const { result, status } = response;
    const message = result.message;

    if (status / 100 !== 2) message = "An internal error has occured, please try again later.";
    
    alert(message);
}