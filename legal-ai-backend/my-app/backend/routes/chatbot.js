const express = require("express")
const router = express.Router()

router.post("/", async (req, res) => {
  try {
    // Implement chatbot logic here
    const { message } = req.body
    // For now, we'll just echo the message
    res.json({ message: `You said: ${message}` })
  } catch (error) {
    res.status(500).json({ message: "Server error" })
  }
})

module.exports = router

