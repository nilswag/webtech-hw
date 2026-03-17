
export function log(req, res, next) {
    const timestamp = new Date().toTimeString().slice(0, 8);
    console.log(`[${timestamp}] ${req.method} request at ${req.url}`);
};