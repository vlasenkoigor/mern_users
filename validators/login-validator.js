const Joi = require('@hapi/joi');

const schema = Joi.object({

    password: Joi.string()
        .required(),

    email: Joi.string()
        .email()
})


module.exports = ({email, password})=>{
	const {error} = schema.validate({ email, password});
	return error;
}