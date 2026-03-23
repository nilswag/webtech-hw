
function timestamp() {
    return new Date().toTimeString().slice(0, 8);
}

export function log(msg) {
    console.log(`[${timestamp()}] ${msg}`);
}

export function error(msg) {
    console.error(`[${timestamp()}] Error: ${msg}`);
}