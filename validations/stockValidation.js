// validations/productValidation.js
const Joi = require('joi');
const { validateRequest } = require('./validationMiddleware');

const stockAdjustmentSchema = Joi.object({
  productId: Joi.string().required(), // Validate ObjectId or any other validation for productId
  qty: Joi.number().required(),
  adjustmentType: Joi.string().valid('addition', 'deduction').required(),
});

const validateStockAdjustment = validateRequest(stockAdjustmentSchema);

module.exports = {
  validateStockAdjustment
};
