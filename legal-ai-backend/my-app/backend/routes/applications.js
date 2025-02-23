const express = require("express")
const router = express.Router()
const Application = require("../models/Application")

router.post("/", async (req, res) => {
  try {
    const application = new Application(req.body)
    await application.save()
    res.status(201).json(application)
  } catch (error) {
    res.status(500).json({ message: "Server error" })
  }
})

router.get("/", async (req, res) => {
  try {
    const applications = await Application.find()
    res.json(applications)
  } catch (error) {
    res.status(500).json({ message: "Server error" })
  }
})

module.exports = router

