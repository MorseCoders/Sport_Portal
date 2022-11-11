const College = require("../model/College");

const player_count = {
    Cricket: 22,
    Football: 22,
    Badminton: 2,
    Chess: 2,
    Volleyball: 14,
    Carrom: 4,
    Snooker: 4,
    Tennis: 4,
    TableTennis: 4,
    Basketball: 10,
};

async function addBooking(req, res, next) {
    const { sport, players, collegeName, startTime, endTime, date } = req.body;
    const count = player_count[sport];
    if (players != count)
        return res.status(400).json(`${count} players are required`);
    const newEntry = {
        name: sport,
        startTime,
        endTime,
        date,
    };
    await College.findOneAndUpdate(
        {
            name: collegeName,
        },
        {
            $push: { bookings: newEntry },
        }
    );
    return res.json("Booking Added");
}

module.exports = {
    addBooking,
};
