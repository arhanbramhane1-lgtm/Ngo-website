const mongoose = require('mongoose');

// This defines the "shape" of a volunteer record in the database.
const volunteerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  city: {
    type: String,
    required: true,
    trim: true
  },
  skill: {
    type: String,
    required: true,
    trim: true
  },
  phone: {
    type: String,
    required: true,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Volunteer', volunteerSchema);
