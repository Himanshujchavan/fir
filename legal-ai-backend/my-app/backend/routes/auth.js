const express = require("express")
const router = express.Router()
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const User = require("../models/User")

router.post("/register", async (req, res) => {
  try {
    const { phone, password } = req.body
    let user = await User.findOne({ phone })
    if (user) {
      return res.status(400).json({ message: "User already exists" })
    }
    user = new User({ phone, password })
    await user.save()
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET)
    res.status(201).json({ token })
  } catch (error) {
    res.status(500).json({ message: "Server error" })
  }
})

router.post("/login", async (req, res) => {
  try {
    const { phone, password } = req.body
    const user = await User.findOne({ phone })
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" })
    }
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" })
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET)
    res.json({ token })
  } catch (error) {
    res.status(500).json({ message: "Server error" })
  }
})

module.exports = router

