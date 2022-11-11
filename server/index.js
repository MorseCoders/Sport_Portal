const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const dbUrl = process.env.LOCAL_DB_CONNECT;
const authRoute = require("./routes/auth");
const bookRoute = require("./routes/booking");
const mongoOpts = { useNewUrlParser: true };

app.use(express.json());
mongoose.connect(dbUrl, mongoOpts, (err) => {
    if (err) console.log(err);
    else console.log("mongodb is connected");
});

app.use("/api/user", authRoute);
app.use("/api/booking", bookRoute);

app.listen(4000, () => console.log("server is running"));
