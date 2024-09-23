// Import
const mongoose = require("mongoose");

// Define the Schema
const UserSchema = mongoose.Schema({
  // Username
  username: {
    type: String,
    required: true,
  },
  // Password
  password: {
    type: String,
    required: true,
  },
});

// Creat the Model for interaction
const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;
