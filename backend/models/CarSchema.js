const mongoose = require('mongoose');

const CarSchema = new mongoose.Schema({
  model: { type: String, required: true },
  plateNumber: { type: String, required: true, unique: true },
  seats: { type: Number, required: true },
  image: { type: String },
  status: { type: String, enum: ['available', 'booked'], default: 'available' }
}, { timestamps: true });

module.exports = mongoose.model('Car', CarSchema);