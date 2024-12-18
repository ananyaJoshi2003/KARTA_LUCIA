const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema({
  bannerUrl: {
    type: String
  },
  title: {
    type: String
  },
  desc: {
    type: String
  },
  imageUrl: {
    type: String
  },
  videoUrl: {
    type: String
  },
  about: {
    type: String
  },
  aboutUrl: {
    type: String
  },
  workUrl_1: {
    type: String
  },
  workUrl_2: {
      type: String
  },
  workUrl_3: {
      type: String
  },
  workUrl_4: {
      type: String
  },
  workUrl_5: {
      type: String
  },
  workUrl_6: {
      type: String
  },
  workUrl_7: {
      type: String
  },
  workUrl_8: {
      type: String
  },
  workUrl_9: {
      type: String
  },
  workUrl_10: {
      type: String
  },
  workUrl_11: {
      type: String
  },
  workUrl_12: {
      type: String
  },
  workUrl_13: {
      type: String
  },
  workUrl_14: {
      type: String
  },
  workUrl_15: {
      type: String
  },
  workUrl_16: {
      type: String
  },
  workUrl_17: {
      type: String
  },
  workUrl_18: {
      type: String
  }
},{
  timestamps: true,
});

module.exports = mongoose.model('Portfolio', portfolioSchema);
