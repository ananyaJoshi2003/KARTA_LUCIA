// controllers/productController.js
const Product = require('../models/product');
const { sendSuccessResponse, sendFailureResponse } = require('../helpers/responseHelper');

// Create a new product
const createProduct = async (req, res) => {
  try {
    const { name, sku, qty, price } = req.body;

    // Check if the SKU already exists in the database
    const existingProduct = await Product.findOne({ sku });
    if (existingProduct) {
      return sendFailureResponse(res, 'Product with this SKU already exists', 409);
    }

    const product = new Product({ name, sku, qty, price });
    await product.save();

    return sendSuccessResponse(res, 'Product created successfully', product, 201);
  } catch (error) {
    console.error(error);
    return sendFailureResponse(res, 'Internal server error', 500);
  }
};

// Get all products or a single product by productId
const getAllProducts = async (req, res) => {
  try {
    const { productId } = req.query;

    if (productId) {
      // If productId is provided, use findOne to retrieve a single product
      const product = await Product.findOne({ _id: productId }).exec();
      if (!product) {
        return sendFailureResponse(res, 'Product not found', 404);
      }
      return sendSuccessResponse(res, 'Product retrieved successfully', product);
    } else {
      // If no productId is provided, use find to retrieve all products
      const products = await Product.find().sort({ createdAt: -1 }).exec();
      return sendSuccessResponse(res, 'Products retrieved successfully', products);
    }
  } catch (error) {
    console.error(error); // Log the error for debugging (optional)
    return sendFailureResponse(res, 'Internal server error', 500);
  }
};

// Edit a product by ID
const editProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const { name, sku, qty, price } = req.body;

    // Find the product by ID and update its properties
    const product = await Product.findByIdAndUpdate(
      productId,
      { name, sku, qty, price },
      { new: true } // Return the updated product
    );

    if (!product) {
      return sendFailureResponse(res, 'Product not found', 404);
    }

    return sendSuccessResponse(res, 'Product updated successfully', product);
  } catch (error) {
    console.error(error);
    return sendFailureResponse(res, 'Internal server error', 500);
  }
};

// Delete a product by ID
const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;

    // Find the product by ID and remove it
    const product = await Product.findByIdAndRemove(productId);

    if (!product) {
      return sendFailureResponse(res, 'Product not found', 404);
    }

    return sendSuccessResponse(res, 'Product deleted successfully');
  } catch (error) {
    console.error(error);
    return sendFailureResponse(res, 'Internal server error', 500);
  }
};


module.exports = {
  createProduct,
  getAllProducts,
  editProduct,
  deleteProduct
};
