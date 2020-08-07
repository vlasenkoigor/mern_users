const {Router} = require('express');
const Users = require('../models/Users');
const isAuth = require('../middlewares/auth.middleware');

const router = Router();

// /api/users/
router.get('/', isAuth, async (req, res)=>{
	const token = req.get('token');
	const users = await Users.find();
	res.json(users)
});

// /api/users/:id
router.get("/:id", async (req, res)=>{
	try {
		const user = await Users.findById(req.params.id).exec();
		if (!user) {
			res.send("no user found")
		} 
		else {
			res.json(user);
		}
	} catch(e){
		console.log(e);
		res.send(e);
	}
})



module.exports = router;