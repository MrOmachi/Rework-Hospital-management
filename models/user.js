const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UsersSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
    is_deleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

// Add indexes to email and name fields in the User model
UsersSchema.index({ email: 1 }, { unique: true });
UsersSchema.index({ name: 1 });

const User = mongoose.model("users", UsersSchema);
module.exports = User;
