// server/controller/trafficViolationController.js
const TrafficViolationReport = require('../models/TrafficViolationReport');

// Save traffic violation report
exports.saveTrafficViolationReport = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { vehicleNumber, location, violationType, image } = req.body;

    const report = new TrafficViolationReport({ vehicleNumber, location, violationType, image });
    await report.save();

    res.status(201).json({ message: 'Traffic violation report created successfully', data: report });
  } catch (error) {
    console.error('Error saving traffic violation report:', error);
    res.status(500).json({ message: 'Error saving traffic violation report', error });
  }
};
