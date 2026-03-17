
function timestamp() {
    return new Date().toTimeString().slice(0, 8);
}

export function log(req, res, next) {
    console.log(`[${timestamp()}] ${req.method} request at ${req.url}`);
    next();
};

export function error(err, req, res, next) {
    console.error(`[${timestamp()} Error: ${err.message || "Internal server error"}`);
    next();
};