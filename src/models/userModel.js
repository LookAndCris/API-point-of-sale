const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
    },
    userId: {
      type: String,
      required: [true, "Please add a user id"],
    },
    password: {
      type: String,
      required: [true, "Please add a password"],
    },
    verified: {
      type: Boolean,
    },
  },
  {
    timestamp: true,
  }
);

module.exports = mongoose.model("Users", userSchema);
