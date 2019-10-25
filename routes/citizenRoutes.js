var express = require("express");
var router = express.Router();
var citizenController = require('../controllers/citizenController.js');

router.post('/create', citizenController.create);


module.exports = router;