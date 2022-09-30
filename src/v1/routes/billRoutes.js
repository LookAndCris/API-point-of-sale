const express = require("express");
const {
  addBillController,
  getAllBillsController,
} = require("../../controllers/billController");

const router = express.Router();

//Methods GET - /apiv1/bills/get-bills
router.get("/get-bills", getAllBillsController);

//Method - POST - /api/v1/bills/add-bill
router.post("/add-bill", addBillController);

module.exports = router;
