const User = require("../models/user");
const bcrypt = require("bcrypt");
const { createToken } = require("../utills/auth");

const registerUser = async (req, res) => {
  const { name, email, password, role } = req.body;

  if (!name || !email || !password || !role) {
    return res.status(403).send({
      state: "error",
      message: "All fields are required",
    });
  }

  try {
    // Check if email or username already exist in the database
    const existingUser = await User.findOne({ $or: [{ email }, { name }] });
    if (existingUser) {
      return res.status(403).send({
        state: "error",
        message: "Email or username already exists",
      });
    }

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);
    req.body.password = passwordHash;

    const newUser = new User(req.body);
    const userData = {
      id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      role: newUser.role,
    };
    const maxAge = 3 * 24 * 60 * 60 * 1000;
    const token = createToken(newUser._id, newUser.email, newUser.role);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge });
    res.status(200).send({
      state: "success",
      message: "Registration successful",
      data: userData,
    });
    newUser.save();
  } catch (error) {
    console.log(error);
    res.status(501).send({ error: "Server error" });
  }
};

const loginUsers = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(403).json({
      status: "failed",
      message: "Email or password cannot be empty",
    });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(401)
        .json({ status: "failed", message: "Wrong email address" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(401)
        .json({ status: "failed", message: "Wrong password" });
    }

    const maxAge = 3 * 24 * 60 * 60 * 1000;
    const token = createToken(user._id); // Use user._id instead of newUser._id
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge });
    const userData = {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    };
    res.status(200).json({
      msg: "Login successful",
      token: token,
      data: userData,
    });
  } catch (error) {
    res.status(500).json({ status: "failed", message: "Server error" });
  }
};

module.exports = { registerUser, loginUsers };
