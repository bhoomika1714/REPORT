// server/routes/strayAnimalRoutes.js
const express = require('express');
const { body } = require('express-validator');
const strayAnimalController = require('../controller/strayAnimalReportController');

const router = express.Router();

router.post(
  '/create',
  [
    body('animalType').notEmpty().withMessage('Animal type is required'),
    body('location').notEmpty().withMessage('Location is required'),
    body('status').notEmpty().withMessage('Status is required'),
    body('image').notEmpty().withMessage('Image URL is required'),
  ],
  strayAnimalController.saveStrayAnimalReport
);

module.exports = router;