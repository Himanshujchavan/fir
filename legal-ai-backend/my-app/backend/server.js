const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const cors = require("cors")

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err))

// Routes
app.use("/api/auth", require("./routes/auth"))
app.use("/api/applications", require("./routes/applications"))
app.use("/api/cases", require("./routes/cases"))
app.use("/api/chatbot", require("./routes/chatbot"))
app.use("/api/knowledge-base", require("./routes/knowledgeBase"))

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

