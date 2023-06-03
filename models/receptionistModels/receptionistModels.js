const mongoose = require("mongoose");

const ReceptionistsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Please add a name"],
    },
    address: { type: String },
    email: {
      type: String,
      unique: true,
      equired: [true, "Please add an email"],
    },
    branch_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "branches",
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Receptionist", ReceptionistsSchema);
