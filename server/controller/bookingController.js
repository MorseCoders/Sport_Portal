async function addBooking(req, res, next) {}

async function fetchBookings(req, res, next) {
    const { college, sport } = req.body;
    console.log(req.params);
    console.log(req.query);
    return res.json("asfadf");
}

async function addBooking(req, res, next) {
    return res.json("asdadf");
}

module.exports = {
    addBooking,
    fetchBookings,
};
