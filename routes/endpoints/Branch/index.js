const {
  createBranch,
  loginBranch,
  getBranchs,
} = require("../../../controllers/branches");

const routes = function (app) {
  // create Branch
  app.post("/branch/register", createBranch);
  app.get("/branchs", getBranchs);

  // Login Branch
  app.post("/branch/login", loginBranch);
};

module.exports = routes;
