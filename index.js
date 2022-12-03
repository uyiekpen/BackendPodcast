const express = require("express");
require("dotenv").config();
require("./resources/db");
const cors = require("cors");
const port = process.env.PORT;

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api", require("./Router/userRouter"));

app.listen(port, () => {
  console.log(`Server is ready on port ${port}`);
});
