const mongoose = require("mongoose")

const CaseSchema = new mongoose.Schema({
  type: { type: String, required: true },
  status: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  predictedResolutionDate: { type: Date, required: true },
})

module.exports = mongoose.model("Case", CaseSchema)

