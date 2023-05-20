const express = require("express");
const app = express.Router();

require("./endpoints/User/index")(app);

module.exports = app;
