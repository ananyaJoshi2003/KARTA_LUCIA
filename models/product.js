// productModel.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  sku: {
    type: String,
    required: true,
    unique: true,
  },
  qty: {
    type: Number,
    required: true,
    default: 0, // You can set an initial stock quantity if needed
  },
  price: {
    type: Number,
    required: true,
  },
},{
  timestamps: true, // This option will automatically add 'createdAt' and 'updatedAt' fields
});

module.exports = mongoose.model('Product', productSchema);
