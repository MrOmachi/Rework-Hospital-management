const {
  createReceptionist,
} = require("../../../controllers/receptionistController/receptionistController");

const routes = function (app) {
  // create Receptionist
  app.post("/receptionists/register", createReceptionist);
};

module.exports = routes;
