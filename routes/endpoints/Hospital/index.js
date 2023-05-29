const upload = require("../../../utills/multer");
const {
  getAllHospital,
  getOneHospital,
  createHospital,
} = require("../../../controllers/hospitals");

const routes = function (app) {
  //To get all hospitals
  app.get("/hospitals", getAllHospital);

  //To get single hospitals
  app.get("/hospitals/:id", getOneHospital);

  //To Create Hospital
  app.post("/hospitals", upload.any(), createHospital);
};

module.exports = routes;
