
export function handleResponse(response) {
    const { result, status } = response;
    let message = result.message;

    if (Math.floor(status / 100) !== 2 && Math.floor(status / 100) !== 4) message = "An internal error has occured, please try again later.";
    
    alert(message);

    location.reload();
}