const port = 4000;

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());

// database connection with mongodb
mongoose.connect(
  "mongodb+srv://Shwet1234:shwet1234@cluster0.tnhuvlw.mongodb.net/ecommerce-mern?retryWrites=true&w=majority&appName=Cluster0"
);

//API CREATION

app.get("/", (req, res) => {
  res.send("express app is running");
});

/// image storage engine

const storage = multer.diskStorage({
  destination: "/upload/images",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage: storage });

app.use("/images", express.static("upload/images"));
app.post("/upload", upload.single("product"), (req, res) => {
  res.json({
    success: 1,
    image_url: `https://localhost:${port}/images/${req.file.filename}`,
  });
});

//schema for creating products

const Product = mongoose.model("Product", {
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  new_price: {
    type: Number,
    required: true,
  },
  old_price: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  available: {
    type: Boolean,
    default: true,
  },
});
app.post("/addproduct", async (req, res) => {
  const product = Product({
    id: req.body.id,
    name: req.body.name,
    image: req.body.image,
    category: req.body.category,
  });
});

app.listen(port, (error) => {
  if (!error) {
    console.log("server is running on port " + port);
  } else {
    console.log("Error:" + error);
  }
});
