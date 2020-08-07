const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const schema = new mongoose.Schema(
	{ 
		email: {
			type : String, required : true,  index: true,
    		unique: true
    	}, 
    	
		password: {type : String, required : true},

		username: {type : String, required : true} 
	}
);

// Apply the uniqueValidator plugin to userSchema.
schema.plugin(uniqueValidator);

module.exports = mongoose.model('User', schema);