const User = require("../../../models/user");
const bcrypt = require("bcrypt");
const { createToken } = require("../../../utills/auth");

const routes = function (app) {
  // Register User
  app.post("/register", async (req, res) => {
    const { name, email, password, role } = req.body();
    if (!name || !email || !password || !!role) {
      res.send({
        state: "error",
        message: "All fields are required",
      });
    }
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(pass.toString(), salt);
    req.body.password = passwordHash;

    try {
      const data = req.body;
      const newUser = new User(data);
      const maxAge = 3 * 24 * 60 * 60 * 1000;
      const token = createToken(newUser._id, newUser.email, newUser.role);
      res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge });
      newUser.save();
    } catch (error) {
      res.send({ error: err });
    }
  });

  // Login User
  app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(403).json({
        status: "failed",
        message: "Email or password cannot be empty",
      });
    const user = await User.findOne({ email });
    if (!user) res.json({ status: "failed", message: "Wrong email address" });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.json({ status: "failed", message: "Wrong password" });
    const maxAge = 3 * 24 * 60 * 60 * 1000;
    const token = createToken(newUser._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge });
    res.status(200).json({
      msg: "login successful",
      token: token,
      data: {
        ...user._doc,
      },
    });
  });
};

module.exports = routes;
