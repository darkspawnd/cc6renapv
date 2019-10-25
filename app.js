const express = require("express");
const jwt = require("jsonwebtoken");
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
require('./routes')(app);

app.listen(3001, () => console.log("Server started on port 3001..."));