const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Branch = require("../models/branches");
const { createToken } = require("../utills/auth");
const asyncHandler = require("express-async-handler");

const getBranchs = asyncHandler(async (req, res) => {
  const branch = await Branch.find();
  res.status(200).json(branch);
});

const createBranch = async (req, res) => {
  const { name, address, initials, hospital_id, password, email } = req.body;
  try {
    if (!name || !initials || !address || !hospital_id || !password || !email) {
      res.status(406).json({
        status: "failed",
        message: "A compulsory field is missing",
      });
      return;
    }

    const branch = new Branch(req.body);
    const token = createToken(branch._id);
    branch.token = token;

    const data = {
      id: branch._id,
      name: branch.name,
      address: branch.address,
      initials: branch.initials,
      email: branch.email,
    };

    await branch.save();
    res.status(200).json({
      status: "success",
      message: "Branch created successfully",
      data,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "failed",
      message: "Internal server error",
    });
  }
};

const loginBranch = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  // Check for Receptionist email
  const branch = await Branch.findOne({ email });
  // generate token for login receptionist
  const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });
  };

  if (branch && password === branch.password) {
    res.json({
      _id: branch.id,
      name: branch.name,
      email: branch.email,
      token: generateToken(branch._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
});

module.exports = { createBranch, loginBranch, getBranchs };
