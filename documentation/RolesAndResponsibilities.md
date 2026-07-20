const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ["user", "driver", "admin"],
    default: "user"
  }
});

module.exports = mongoose.model("User", userSchema);const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ["user", "driver", "admin"],
    default: "user"
  }
});

module.exports = mongoose.model("User", userSchema);
const express = require("express");
const router = express.Router();
const authorize = require("../middleware/auth");

router.get("/user", authorize("user"), (req, res) => {
  res.send("User Dashboard");
});

router.get("/driver", authorize("driver"), (req, res) => {
  res.send("Driver Dashboard");
});

router.get("/admin", authorize("admin"), (req, res) => {
  res.send("Admin Dashboard");
});

module.exports = router;
