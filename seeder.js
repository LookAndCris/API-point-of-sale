const mongoose = require("mongoose");
const dotenv = require("dotenv");
const connectDB = require("./config/db.js");
const itemModel = require("./models/itemModel.js");
const items = require("./utils/data.js");
require("colors");

//config
dotenv.config();
connectDB();

//seeder
const importData = async () => {
  try {
    await itemModel.deleteMany();
    await itemModel.insertMany(items);
    console.log("Data imported".green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

importData();
