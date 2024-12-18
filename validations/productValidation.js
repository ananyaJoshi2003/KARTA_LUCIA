// validations/productValidation.js
const Joi = require('joi');
const { validateRequest } = require('./validationMiddleware');

const createProductSchema = Joi.object({
  name: Joi.string().max(100).required(),
  sku: Joi.string().required(), // SKU is required
  qty: Joi.number().required(), // Stock quantity is required
  price: Joi.number().required(),
});

const validateCreateProduct = validateRequest(createProductSchema);

module.exports = {
  validateCreateProduct
};
