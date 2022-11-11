const Joi = require("@hapi/joi");

const registerValidation = (data) => {
    const schema = Joi.object({
        id: Joi.number().required(),
        name: Joi.string().min(2).required(),
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required(),
        college: Joi.string().required(),
    });

    return schema.validate(data);
};

const loginValidation = (data) => {
    const schema = Joi.object({
        id: Joi.number().required(),
        password: Joi.string().min(6).required(),
    });

    return schema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
