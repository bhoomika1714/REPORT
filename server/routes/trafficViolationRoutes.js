// server/routes/trafficViolationRoutes.js
const express = require('express');
const { body } = require('express-validator');
const trafficController = require('../controller/trafficViolationController');

const router = express.Router();

router.post(
  '/create',
  [
    body('vehicleNumber').notEmpty().withMessage('Vehicle number is required'),
    body('location').notEmpty().withMessage('Location is required'),
    body('violationType').notEmpty().withMessage('Violation type is required'),
    body('image').notEmpty().withMessage('Image URL is required'),
  ],
  trafficController.saveTrafficViolationReport
);

module.exports = router;
