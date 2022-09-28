const express = require("express");
const {
  loginController,
  registerController,
} = require("../../controllers/userController");

const router = express.Router();

//routes
//Method - POST - /api/v1/users/login
router.post("/login", loginController);

//Method - POST - /api/v1/users/register
router.post("/register", registerController);

module.exports = router;
