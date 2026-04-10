
export function handleResponse(response) {
    const { message, status } = response;
    if (status / 100 !== 2) message = "An internal error has occured, please try again later.";
    alert(message);
}