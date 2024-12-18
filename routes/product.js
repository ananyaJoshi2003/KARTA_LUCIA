// routes/users.js
const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/productController');
const { validateCreateProduct } = require('../validations/productValidation');

// Create a new user
router.post('/', validateCreateProduct, ProductController.createProduct);

// Get all users
router.get('/', ProductController.getAllProducts);

// Edit a product by ID
router.put('/:id', ProductController.editProduct);

// Delete a product by ID
router.delete('/:id', ProductController.deleteProduct);

module.exports = router;
