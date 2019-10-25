let jwt = require('jsonwebtoken');
let config = require('../config.js');

let AuthService = require('../services/AuthService');
let _authService = new AuthService();

exports.login = function(req, res) {
    let username = req.body.user;
    let password = req.body.password;

    if(username && password) {    
        _authService.authorize(username, password, function(err, result) {
            if(err) throw err;
            if(result[0] && result[0].usuario === username) {
                let token = jwt.sign({username: username},
                        config.secret, 
                        {
                            expiresIn   : '24h'
                        }
                    );
                res.json({
                    success: true, 
                    message: 'Authenticated',
                    token: token,
                    expiresIn: token.expiresIn,
                    username: username
                });
            } else {
                res.status(403);
                res.json({
                    success: false,
                    message: 'Incorrect username or password'
                });
            }
        });
    } else {
        res.status(400);
        res.json({
            success: false,
            message: 'Username and password required'
        });
    }
}

exports.register = function(req, res) {
    let username = req.body.user;
    let password = req.body.password;
};  