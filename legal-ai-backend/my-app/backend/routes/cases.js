const express = require("express")
const router = express.Router()
const Case = require("../models/Case")

router.get("/", async (req, res) => {
  try {
    const cases = await Case.find()
    res.json(cases)
  } catch (error) {
    res.status(500).json({ message: "Server error" })
  }
})

module.exports = router

