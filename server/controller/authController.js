const Student = require("../model/Student");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { registerValidation, loginValidation } = require("../utils/validation");

async function studentRegistration(req, res, next) {
    const { error } = registerValidation(req.body);
    if (error) {
        return res.status(400).json(error.details[0].message);
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
    });

    let existingUser = await User.findOne({ name: user.name });
    if (existingUser) return res.status(400).json("Username already taken");
    existingUser = await User.findOne({ email: user.email });
    if (existingUser) return res.status(400).json("This user already exist");

    const savedUser = await user.save();
    return savedUser;
}

async function studentLogin(req, res, next) {
    const { error } = loginValidation(req.body);
    if (error) {
        return res.status(400).json(error.details[0].message);
    }

    const user = await User.findOne({ email: req.body.email });
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!user || !validPass)
        return res
            .status(401)
            .json("You have entered an invalid username or password");
    const accessToken = jwt.sign(
        { _id: user._id, username: user.name },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: "24h",
        }
    );
    return accessToken;
}

module.exports = {
    studentRegistration,
    studentLogin,
};
