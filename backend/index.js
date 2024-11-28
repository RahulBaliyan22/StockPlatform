require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");
const { HoldingsModel } = require("./model/HoldingsModel ");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel ");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

// Validate environment variables
if (!uri) {
  throw new Error("MONGO_URL is not defined in the environment variables");
}

const app = express();


// Middleware
app.use(cors({
  origin: process.env.CLIENT_URL || "http://localhost:3002",
  credentials: true,
}));
app.use(bodyParser.json());
app.use(cookieParser());

// Routes
app.use("/", authRoute);

app.get("/allHoldings", async (req, res) => {
  try {
    let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching holdings" });
  }
});

app.get("/allPositions", async (req, res) => {
  try {
    let allPositions = await PositionsModel.find({});
    res.json(allPositions);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching positions" });
  }
});

app.post("/newOrder", async (req, res) => {
  const { name, qty, price, mode } = req.body;
  if (!name || !qty || !price || !mode) {
    return res.status(400).json({ message: "All fields are required" });
  }
  try {
    let newOrder = new OrdersModel({ name, qty, price, mode });
    await newOrder.save();
    res.status(201).send("Order saved!");
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error saving order" });
  }
});

// Connect to MongoDB and start the server
mongoose.connect(uri)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => console.log(`App running on port ${PORT}`));
  })
  .catch(err => {
    console.error("Database connection failed", err);
    process.exit(1);
  });

