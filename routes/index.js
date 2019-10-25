let express = require("express");
let router = express.Router();
let middlewares = require('./middleware.js');


router.use('/auth', require('./authRoutes'));
router.use('/location/', require('./locationRoutes'));
router.use('/citizen/', require('./citizenRoutes'));

module.exports = function(app) {
    app.use(middlewares.CORS);
    app.use('/api', router);
};