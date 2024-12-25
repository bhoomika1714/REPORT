// server/controller/strayAnimalReportController.js
const { validationResult } = require('express-validator');
const StrayAnimalReport = require('../models/StrayAnimalReport');

// Save stray animal report
exports.saveStrayAnimalReport = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { animalType, location, status, image } = req.body;

    const report = new StrayAnimalReport({ animalType, location, status, image });
    await report.save();

    res.status(201).json({ message: 'Stray animal report created successfully', data: report });
  } catch (error) {
    console.error('Error saving stray animal report:', error);
    res.status(500).json({ message: 'Error saving stray animal report', error });
  }
};
