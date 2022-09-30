const billModel = require("../models/billModel");

//Get All Bills
const getAllBillsController = async (req, res) => {
  try {
    const bills = await billModel.find();
    res.status(200).json(bills);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//Add Bill
const addBillController = async (req, res) => {
  try {
    const newBill = new billModel(req.body);
    await newBill.save();
    res.status(201).send(newBill);
  } catch (error) {
    res.status(400).send("error", error);
    console.log(error);
  }
};

module.exports = {
  addBillController,
  getAllBillsController,
};
