const User = require("../../../models/user");
const bcrypt = require("bcrypt");
const { createToken } = require("../../../utills/auth");
const { registerUser, loginUsers } = require("../../../controllers/users");

const routes = function (app) {
  // Register User
  app.post("/register", registerUser);

  // Login User
  app.post("/login", loginUsers);
};

module.exports = routes;
