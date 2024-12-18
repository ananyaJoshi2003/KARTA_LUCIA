// routes/stockAdjustmentRoutes.js
const express = require('express');
const router = express.Router();
const StockAdjustmentController = require('../controllers/stockAdjustmentController');
const { validateStockAdjustment } = require('../validations/stockValidation');

// Create a stock adjustment
router.post('/', validateStockAdjustment, StockAdjustmentController.createStockAdjustment);

// Get all stock adjustments
router.get('/', StockAdjustmentController.getAllStockAdjustments);

// Get a single stock adjustment by ID
router.get('/:id', StockAdjustmentController.getStockAdjustmentById);

// Update a stock adjustment by ID
router.put('/:id', StockAdjustmentController.updateStockAdjustment);

// Delete a stock adjustment by ID
router.delete('/:id', StockAdjustmentController.deleteStockAdjustment);

module.exports = router;
