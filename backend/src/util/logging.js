
/**
 * A helper function to get a timestamp.
 * @returns A formatted string of the current time.
 */
function timestamp() {
    return new Date().toTimeString().slice(0, 8);
}

/**
 * Helper function to log a message.
 * @param {*} msg The message to be logged.
 */
export function log(msg) {
    console.log(`[${timestamp()}] ${msg}`);
}

/**
 * Helper function to log an error.
 * @param {*} msg The error to be logged.
 */
export function error(msg) {
    console.error(`[${timestamp()}] Error: ${msg}`);
}