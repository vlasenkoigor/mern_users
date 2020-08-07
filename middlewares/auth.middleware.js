const config = require('config');
const jwt = require('jsonwebtoken');


module.exports = (req, res, next)=>{
    try {
        const decoded = jwt.verify(req.get('token'), config.jwtTokenSecret);
        
        if (decoded) {
            req.userID = decoded.id;
            next();
        }

    } catch(e){
        res.json(e);
    }
}