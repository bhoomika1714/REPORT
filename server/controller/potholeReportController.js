// server/controller/potholeReportController.js
const PotholeReport = require('../models/PotholeReport');

// Save pothole report
exports.savePotholeReport = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { location, severity, image } = req.body;

    const report = new PotholeReport({ location, severity, image });
    await report.save();

    res.status(201).json({ message: 'Pothole report created successfully', data: report });
  } catch (error) {
    console.error('Error saving pothole report:', error);
    res.status(500).json({ message: 'Error saving pothole report', error });
  }
};
