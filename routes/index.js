const express = require("express");
const app = express.Router();

require("./endpoints/User/index")(app);
require("./endpoints/Hospital/index")(app);
require("./endpoints/Branch/index")(app);
require("./endpoints/ReceptionistRoute/index")(app);

module.exports = app;
