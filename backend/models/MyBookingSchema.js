const mongoose = require('mongoose');

const MyBookingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  carId: { type: mongoose.Schema.Types.ObjectId, ref: 'Car', required: true },
  pickupCity: String,
  pickupAddress: String,
  dropCity: String,
  dropAddress: String,
  pickupDate: String,
  pickupTime: String,
  status: { type: String, enum: ['On the Way', 'Ongoing', 'Completed'], default: 'On the Way' }
}, { timestamps: true });

module.exports = mongoose.model('MyBooking', MyBookingSchema);