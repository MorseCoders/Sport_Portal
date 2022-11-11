const mongoose = require("mongoose");

const sportSchema = new mongoose.Schema({
    sports: [
        {
            name: {
                type: String,
                required: true,
            },
            players: {
                type: Number,
                required: true,
            },
        },
    ],
});

module.exports = mongoose.model("Sport", sportSchema);
