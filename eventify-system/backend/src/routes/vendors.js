const express = require('express');
const router = express.Router();
const vendorController = require('../controllers/vendorController');

// Public routes
router.get('/', vendorController.getVendors);
router.get('/categories', vendorController.getCategories);
router.get('/:id', vendorController.getVendor);

module.exports = router;
