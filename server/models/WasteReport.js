// server/models/WasteReport.js
const mongoose = require('mongoose');

const wasteReportSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  image: { type: String, required: true }, // URL or path to the uploaded image
  reportedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('WasteReport', wasteReportSchema);