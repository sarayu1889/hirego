const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

console.log("MONGO_URI =", process.env.MONGO_URI); // temporary debug

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB error:", err));

mongoose.connection.on("connected", () => {
  console.log("Mongoose event: connected to MongoDB");
});

app.get("/", (req, res) => {
  res.send("Hirego backend running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
