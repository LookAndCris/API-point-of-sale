const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./src/config/db");
require("colors");

//dotenv config
dotenv.config();
//db connection config
connectDB();

//REST OBJECT
const app = express();

//MIDDLEWARES
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));

//ROUTES
app.use("/api/v1/items", require("./src/v1/routes/itemRoutes"));

//PORT
const PORT = process.env.PORT || 8080;

//SERVER
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`.yellow.bold);
});
