const express = require("express");
const mongoose = require("mongoose");
const app = express();
const db = require("./models");
const cors = require("cors");
require("dotenv").config();

const Role = db.role;
var corsOptions = {
  origin: "http://localhost:8087",
};

db.mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch((err) => {
    console.error("Connection error", err);
    process.exit();
  });
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.json({ message: "Welcome to application." });
});

const PORT = process.env.PORT || 8086;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
