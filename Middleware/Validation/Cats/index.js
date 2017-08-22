let Joi = require('joi');

module.exports = {
    body: {
        name: Joi.string().required(),
        gender: Joi.string().required(),
        age: Joi.number().integer().required()
    }
};