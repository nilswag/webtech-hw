
function timestamp() {
    return new Date().toTimeString().slice(0, 8);
}

export function log(req, res, next) {
    console.log(`[${timestamp()}] ${req.method} request at ${req.url}`);
    next();
};

export function error(err, req, res, next) {
    const message = err.message || "Internal server error";
    console.error(`[${timestamp()} Error: ${message}`);
    res.status(err.status || 500).json({
        message: message
    });
};