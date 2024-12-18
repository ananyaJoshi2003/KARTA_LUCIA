const mongoose = require('mongoose');

const stockAdjustmentSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: true,
    },
    qty: {
      type: Number,
      required: true,
    },
    adjustmentType: {
        type: String,
        enum: ['addition', 'deduction'], // Enum values for adjustmentType
        required: true,
      },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('StockAdjustment', stockAdjustmentSchema);
