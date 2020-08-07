const express = require('express');
const app = express();
const config = require('config');
const mongoose = require('mongoose');


app.use(express.json( {extented : true} ))
// app.use(bodyParser.json())

// set up routes 
app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/users', require('./routes/users.routes'))

async function start() {
	try {
		await mongoose.connect( config.get('mongoUri'),
			{useNewUrlParser: true, useUnifiedTopology: true}
		);	

	} catch(e){
		console.log("Server error", e);
		process.exit();
	}
}

start();

// runnning server 
const PORT = config.get('SERVER.PORT') || 3000

app.listen(PORT, (e)=>{
	console.log(`Server has been runninng on port : ${PORT}`)
})