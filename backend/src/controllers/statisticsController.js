export async function getLeaderboard(req, res, next) {
    try {
        const result = [{name: "hefa", wins: 10, losses: 2}, {name: "oiajewofj", wins: 100, losses: 77}];
        res.status(200).json(result);
    } catch(err) {
        return next(err);
    }
};

export async function getNextGame(req, res, next) {
    try {
        const result = {name: "Rome", date: (new Date(2026, 6, 1, 12, 0, 0)).toISOString()};
        res.status(200).json(result);
    } catch(err) {
        return next(err);
    }
}