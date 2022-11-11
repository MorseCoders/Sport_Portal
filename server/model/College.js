const mongoose = require("mongoose");

const collegeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    sportsAvailable: [String],
    bookings: [
        {
            name: {
                type: String,
                required: true,
            },
            bookings: [
                {
                    startTime: {
                        type: String,
                        required: true,
                    },
                    endTime: {
                        type: String,
                        required: true,
                    },
                    date: {
                        type: Date,
                        required: true,
                    },
                },
            ],
        },
    ],
});

module.exports = mongoose.model("College", collegeSchema);
