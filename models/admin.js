const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  fullName: { type: String },
  role: { type: String, enum: ['admin', 'moderator', 'viewer'], default: 'viewer' }, 
  isActive: { type: Boolean, default: true }, 
},{
  timestamps: true,
});

module.exports = mongoose.model('Admin', adminSchema);
