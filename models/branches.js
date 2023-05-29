const mongoose = require("mongoose");
const BranchSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    address: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    initials: { type: String, unique: true, required: true },
    hospital_id: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "hospitals",
    },
    password: { type: String, required: true },
    token: { type: String },
  },
  {
    timestamps: true,
  }
);

const Branch = mongoose.model("branches", BranchSchema);
module.exports = Branch;
