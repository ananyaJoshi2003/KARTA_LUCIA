const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  content: {
    type: String,
  },
  author: {
    type: String,
  },
  imageUrl: {
    type: String
  },
  redirectUrl: {
    type: String
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
},{
  timestamps: true,
});

module.exports = mongoose.model('Blog', blogSchema);
