const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {Router} = require('express');
const config = require('config');
const User = require('../models/Users');
const registerValidator = require('../validators/register-validator');
const looginValidator = require('../validators/login-validator');



const router = Router();

// REGISTER ROUTE 
router.post('/register', async (req, res)=>{
	const {email,username, password} = req.body;
	
	// perform registration data validation 
	const error = registerValidator({email, username, password})
	if (error) {
		res.json(error);
	}

	// create hash password 
	const hash = await bcrypt.hash(password, 10);

	// create user 
	const user = new User({
		email, password : hash, username	
	});	


	// save user to DB 
	try{
		await user.save();
		res.json(user)
	} catch(e){
		res.status(401).json(e)
	}

})


// LOGIN ROUTE 
router.post('/login', async (req, res)=>{
	const {email, password} = req.body;

	// perform login data validation 
	const error = looginValidator({email, password})
	if (error) {
		res.json(error);
	}

	const user = await User.findOne({email})

	if (!user){
		res.send("no user found")
	}


	const match = await bcrypt.compare(password, user.password);

	// if password matchs we generate and send tokecn header 
	if (match) {
		const token = jwt.sign({ id: user.id }, config.get("jwtTokenSecret"));

		res.set({token}).send({id : user._id});

	} else {
		res.send("Invalid password")
	}
})



module.exports = router;