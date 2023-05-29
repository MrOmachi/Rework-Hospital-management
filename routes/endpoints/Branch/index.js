const { createBranch, loginBranch } = require("../../../controllers/branches");

const routes = function (app) {
  // create Branch
  app.post("/branch/register", createBranch);

  // Login Branch
  app.post("/branch/login", loginBranch);
};

module.exports = routes;
