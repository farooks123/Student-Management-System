const express = require("express");
const app = express();
const cors = require("cors");
const ConnectDB = require("./connection/db");
app.use(express.json());
app.use(cors());

const PORT = 3000;

ConnectDB();

app.listen(PORT, () => {
  console.log("Application is running in PORT", PORT);
});










