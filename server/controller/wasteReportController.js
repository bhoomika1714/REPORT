const { validationResult } = require('express-validator');
const WasteReport = require('../models/WasteReport');

// Save waste report
exports.saveWasteReport = async (req, res) => {
  try {
    // Validate incoming request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { title, description, location, image } = req.body;

    // Create a new waste report
    const report = new WasteReport({ title, description, location, image });
    await report.save();

    res.status(201).json({ message: 'Waste report created successfully', data: report });
  } catch (error) {
    console.error('Error saving waste report:', error);
    res.status(500).json({ message: 'Error saving waste report', error });
  }
};
