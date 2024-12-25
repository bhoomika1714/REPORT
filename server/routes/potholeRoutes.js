// server/routes/potholeRoutes.js
const express = require('express');
const { body } = require('express-validator');
potholeController = require('../controller/potholeReportController');

const router = express.Router();

router.post(
  '/create',
  [
    body('location').notEmpty().withMessage('Location is required'),
    body('severity').notEmpty().withMessage('Severity is required'),
    body('image').notEmpty().withMessage('Image URL is required'),
  ],
  potholeController.savePotholeReport
);

module.exports = router;
