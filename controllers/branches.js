const Branch = require("../models/branches");
const { createToken } = require("../utills/auth");

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

const loginBranch = async (req, res) => {
  const { email, password } = req.body;
  const branch = Branch.findOne(email);
  if (!branch) {
    res.status(404).json({
      status: "failed",
      message: "No branch with such email",
    });
  }
  if (branch.password !== password) {
    res.status(404).json({
      status: "failed",
      message: "Wrong password entered",
    });
  }
  const token = createToken(branch._id);
  branch.token = token;
  branch.save();
  res.status(200).json({
    status: "success",
    message: "Branch login successful",
    data: {
      id: branch._id,
      name: branch.name,
      address: branch.address,
      initials: branch.initials,
      email: branch.email,
    },
  });
};

module.exports = { createBranch, loginBranch };
