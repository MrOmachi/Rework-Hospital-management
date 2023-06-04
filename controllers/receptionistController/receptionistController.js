const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Receptionist = require("../../models/receptionistModels/receptionistModels");
const asyncHandler = require("express-async-handler");

const createReceptionist = asyncHandler(async (req, res) => {
  const { name, address, branch_id, password, email } = req.body;
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
  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const receptionist = await Receptionist.create({
    name,
    address,
    branch_id,
    password: hashedPassword,
    email,
  });
  const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });
  };
  if (receptionist) {
    res.status(201).json({
      message: "Receptionist Created",
      data: {
        id: receptionist._id,
        name,
        address,
        branch_id,
        email,
      },
      token: generateToken(receptionist._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

const loginReceptionist = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  // Check for Receptionist email
  const receptionist = await Receptionist.findOne({ email });
  // generate token for login receptionist
  const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });
  };

  if (receptionist && (await bcrypt.compare(password, receptionist.password))) {
    res.json({
      _id: receptionist.id,
      name: receptionist.name,
      email: receptionist.email,
      token: generateToken(receptionist._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
});

const getMeReceptionist = asyncHandler(async (req, res) => {
  const { _id, name, email } = await Receptionist.findById(req.receptionist.id);

  res.status(200).json({
    id: _id,
    name,
    email,
  });
});

module.exports = { createReceptionist, loginReceptionist, getMeReceptionist };
