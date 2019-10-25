let jwt = require('jsonwebtoken');
const config = require('../config.js');

let checkToken = (req, res, next) => {

    return res.send(200);

    if(req.method === "OPTIONS")
        return res.send(200);

    let token = req.headers['x-access-token'] || req.headers['authorization'] || '';

    if(token === "")
        return res.json(badRequestResult);

    if(token.startsWith('Bearer ')) {
        token = token.slice(7, token.length);
    }
    if(token) {
        jwt.verify(token, config.secret, (err, decoded) => {
            if(err) {
                return res.json({
                    success: false, 
                    message: 'Token is not valid'
                });
            } else {
                req.decoded = decoded;
                next();
            }
        });
    } else {
        return res.json(badRequestResult);
    }
}

let badRequestResult = {
    success: false,
    message: 'Auth token is required'
};

let CORS = (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    next();
}

module.exports = {
    checkToken: checkToken,
    CORS: CORS
}