const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors");
const routes = require("./src/router/routes");
const bodyParser = require("body-parser");
const connectDatabase = require("./src/database/mongoose");

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

connectDatabase();

app.use("/api", routes);

app.listen(process.env.PORT, () => {
  try {
    console.log(`Port is listening.`);
  } catch (error) {
    console.log("Error connecting to port: ", error);
  }
});
