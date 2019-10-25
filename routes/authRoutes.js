var express = require("express");
var router = express.Router();
var loginController = require('../controllers/loginController.js');

router.post('/login', loginController.login);

module.exports = router;