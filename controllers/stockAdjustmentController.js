// controllers/stockAdjustmentController.js
const StockAdjustment = require('../models/stock');
const Product = require('../models/product');

const { sendSuccessResponse, sendFailureResponse } = require('../helpers/responseHelper');

// Create a stock adjustment
const createStockAdjustment = async (req, res) => {
  try {
    const { productId, qty, adjustmentType } = req.body;

    // Find the product by ID to update its stock qty
    const product = await Product.findById(productId).exec();

    if (!product) {
      return sendFailureResponse(res, 'Product not found', 404);
    }

    if (adjustmentType === 'addition') {
      // For addition, increase the stock quantity
      product.stockQuantity += qty;
    } else if (adjustmentType === 'deduction') {
      // For deduction, check if there's enough stock to deduct
      if (product.stockQuantity < qty) {
        return sendFailureResponse(res, 'Insufficient stock for deduction', 400);
      }
      // Deduct the stock quantity
      product.stockQuantity -= qty;
    } else {
      return sendFailureResponse(res, 'Invalid adjustment type', 400);
    }

    // Save the updated product
    await product.save();

    // Create the stock adjustment record
    const stockAdjustment = new StockAdjustment({ productId, qty, adjustmentType });
    await stockAdjustment.save();

    return sendSuccessResponse(res, 'Stock adjustment created successfully', stockAdjustment, 201);
  } catch (error) {
    console.error(error);
    return sendFailureResponse(res, 'Internal server error', 500);
  }
};

// Get all stock adjustments
const getAllStockAdjustments = async (req, res) => {
  try {
    const stockAdjustments = await StockAdjustment.find().sort({ createdAt: -1 }).exec();
    return sendSuccessResponse(res, 'Stock adjustments retrieved successfully', stockAdjustments);
  } catch (error) {
    console.error(error);
    return sendFailureResponse(res, 'Internal server error', 500);
  }
};

// Get a single stock adjustment by ID
const getStockAdjustmentById = async (req, res) => {
  try {
    const stockAdjustment = await StockAdjustment.findById(req.params.id).exec();
    if (!stockAdjustment) {
      return sendFailureResponse(res, 'Stock adjustment not found', 404);
    }
    return sendSuccessResponse(res, 'Stock adjustment retrieved successfully', stockAdjustment);
  } catch (error) {
    console.error(error);
    return sendFailureResponse(res, 'Internal server error', 500);
  }
};

// Update a stock adjustment by ID
const updateStockAdjustment = async (req, res) => {
  try {
    const { qty, adjustmentType } = req.body;
    const stockAdjustment = await StockAdjustment.findByIdAndUpdate(
      req.params.id,
      { qty, adjustmentType },
      { new: true }
    ).exec();
    if (!stockAdjustment) {
      return sendFailureResponse(res, 'Stock adjustment not found', 404);
    }
    return sendSuccessResponse(res, 'Stock adjustment updated successfully', stockAdjustment);
  } catch (error) {
    console.error(error);
    return sendFailureResponse(res, 'Internal server error', 500);
  }
};

// Delete a stock adjustment by ID
const deleteStockAdjustment = async (req, res) => {
  try {
    const stockAdjustment = await StockAdjustment.findByIdAndRemove(req.params.id).exec();
    if (!stockAdjustment) {
      return sendFailureResponse(res, 'Stock adjustment not found', 404);
    }
    return sendSuccessResponse(res, 'Stock adjustment deleted successfully');
  } catch (error) {
    console.error(error);
    return sendFailureResponse(res, 'Internal server error', 500);
  }
};

module.exports = {
  createStockAdjustment,
  getAllStockAdjustments,
  getStockAdjustmentById,
  updateStockAdjustment,
  deleteStockAdjustment,
};
