const express = require("express");
const User = require("../models/User");
const authMiddleware = require("../middleware/AuthMiddleware"); // assumes JWT middleware
const router = express.Router();
const UserModel = require("../models/User.model")

// GET user profile
router.get("/profile", authMiddleware, async (req, res) => {
  try {
    const user = await UserModel.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});


// UPDATE user profile
router.put("/profile", authMiddleware, async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    const user = await User.findByIdAndUpdate(
      req.user.id,
      { name, email, phone },
      { new: true }
    ).select("-password");
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
