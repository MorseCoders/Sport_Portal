const mongoose = require("mongoose");

const collegeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    sportsAvailable: [String],
    bookings: [
        {
            name: String,
            startTime: {
                type: String,
                required: true,
            },
            endTime: {
                type: String,
                required: true,
            },
            date: {
                type: String,
                required: true,
            },
        },
    ],
});

module.exports = mongoose.model("College", collegeSchema);
