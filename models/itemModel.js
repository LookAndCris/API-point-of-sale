const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
    },
    price: {
      type: Number,
      required: [true, "Please add a price"],
    },
    category: {
      type: String,
      required: [true, "Please add a category"],
    },
    image: {
      type: String,
      required: [true, "Please add an image"],
    },
  },
  {
    timestamp: true,
  }
);

module.exports = mongoose.model("Items", itemSchema);
