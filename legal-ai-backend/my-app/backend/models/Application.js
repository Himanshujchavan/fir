const mongoose = require("mongoose")

const ApplicationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  applicationType: { type: String, required: true },
  details: { type: String },
  status: { type: String, default: "Pending" },
  createdAt: { type: Date, default: Date.now },
})

module.exports = mongoose.model("Application", ApplicationSchema)

