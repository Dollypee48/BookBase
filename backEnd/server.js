const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const connectDB = require("./config/db");
const corsOptions = require("./config/corsOptions");
const authRoutes = require("./routes/authRoutes");
const bookRoutes = require("./routes/bookRoutes");



require("dotenv").config();

dotenv.config();
connectDB();


const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors(corsOptions));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("📚 BookBase API is running");
});

app.use("/api/auth", authRoutes);
app.use("/api/books", bookRoutes);



mongoose.connection.once("open", () => {
  console.log("✅ Connected to MongoDB");
  app.listen(PORT, () => {
    console.log(`🚀 Server running on ${PORT}`);
  });
});
