const express = require("express");
const app = express();
const cors = require('cors')
const mongoose = require("mongoose");
require("dotenv").config();
const dbUrl = process.env.LOCAL_DB_CONNECT;
const authRoute = require("./routes/auth");
const mongoOpts = { useNewUrlParser: true , useNewUrlParser : true };

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://morse_coder:morse_coder@atlascluster.28usg8c.mongodb.net/test", mongoOpts, (err) => {
    if (err) console.log(err);
    else console.log("mongodb is connected");
});

app.use("/api/user", authRoute);

app.listen(4000, () => console.log("server is running 4000"));
