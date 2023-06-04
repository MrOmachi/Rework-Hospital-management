const {
  createReceptionist,
  loginReceptionist,
  getMeReceptionist,
} = require("../../../controllers/receptionistController/receptionistController");
const { protect } = require("../../../middleware/receptonistAuthMiddleware");

const routes = function (app) {
  // create Receptionist
  app.post("/receptionists/register", createReceptionist);
  app.post("/receptionists/login", loginReceptionist);
  app.get("/mereceptionists", protect, getMeReceptionist);
};

module.exports = routes;
