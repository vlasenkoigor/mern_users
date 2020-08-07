const Joi = require('@hapi/joi');

const schema = Joi.object({
    username: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),

    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),


    email: Joi.string()
        .email()
})


module.exports = ({email, username, password})=>{
	const {error, value} = schema.validate({ email, username, password});
	return error;
}