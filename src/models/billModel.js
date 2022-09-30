const mongoose = require("mongoose");

const billSchema = mongoose.Schema(
  {
    customerName: {
      type: String,
      required: [true, "Please add a customer name"],
    },
    customerContact: {
      type: Number,
      required: [true, "Please add a customer contact"],
    },
    paymentMode: {
      type: String,
      required: [true, "Please add a payment mode"],
    },
    subTotal: {
      type: Number,
      required: [true, "Please add a sub total"],
    },
    tax: {
      type: Number,
      required: [true, "Please add a tax"],
    },
    totalAmount: {
      type: Number,
      required: [true, "Please add a total amount"],
    },
    cartItems: {
      type: Array,
      required: [true, "Please add cart items"],
    },
    userId: {
      type: String,
      required: [true, "Please add a user id"],
    },
    date: {
      type: Date,
      default: Date.now(),
    },
  },
  { timestamp: true }
);

module.exports = mongoose.model("Bills", billSchema);
