const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  clientName: {
    type: String
  }
},{
  timestamps: true,
});

module.exports = mongoose.model('Client', clientSchema);
