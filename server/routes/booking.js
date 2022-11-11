const router = require("express").Router();
const {
    addBooking,
    fetchBookings,
} = require("../controller/bookingController");

const authorized = require("../utils/middleware");

router.post("/add", authorized, addBooking);

router.get("/:college/:sport", fetchBookings);

module.exports = router;
