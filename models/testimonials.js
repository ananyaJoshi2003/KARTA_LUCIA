const mongoose = require('mongoose');

const testimonialsSchema = new mongoose.Schema({
  client: {
    type: String
  },
  logoUrl: {
    type: String
  },
  description: {
    type: String
  }
},{
  timestamps: true,
});

module.exports = mongoose.model('Testimonials', testimonialsSchema);
