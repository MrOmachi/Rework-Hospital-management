const Receptionist = require("../../models/receptionistModels/receptionistModels");
const asyncHandler = require("express-async-handler");

const createReceptionist = asyncHandler(async (req, res) => {
  const { name, address, branch_id, password, email } = req.body;

  console.log(req.body);

  if (!name || !address || !branch_id || !password || !email) {
    res.status(400);
    throw new Error("Please add a text field");
  }

  // Check if Receptionist exists
  const ReceptionistExists = await Receptionist.findOne({ email });

  if (ReceptionistExists) {
    res.status(400);
    throw new Error("Receptionist already exists");
  }

  const receptionist = await Receptionist.create({
    name,
    address,
    branch_id,
    password,
    email,
  });

  res.status(200).json({
    message: "Successful",
    data: receptionist,
  });
});

module.exports = { createReceptionist };
