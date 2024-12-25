const express = require('express');
const { body } = require('express-validator');
const reportController = require('../controller/wasteReportController');

const router = express.Router();

// Define the POST /create route
router.post(
  '/create',
  [
    body('title').notEmpty().withMessage('Title is required'),
    body('description').notEmpty().withMessage('Description is required'),
    body('location').notEmpty().withMessage('Location is required'),
    body('image').notEmpty().withMessage('Image URL is required'), // Ensure the image field is provided
  ],
  reportController.saveWasteReport
);

module.exports = router;
