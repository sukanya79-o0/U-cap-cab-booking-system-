const MyBooking = require('../models/MyBookingSchema');
const Car = require('../models/CarSchema');

exports.bookRide = async (req, res) => {
  try {
    const newBooking = await MyBooking.create({
      userId: req.user.id,
      carId: req.body.carId,
      ...req.body
    });
    await Car.findByIdAndUpdate(req.body.carId, { status: 'booked' });
    res.status(201).json(newBooking);
  } catch (error) {
    res.status(500).json({ message: 'Error processing booking' });
  }
};

exports.getBookings = async (req, res) => {
  const query = req.user.role === 'admin' ? {} : { userId: req.user.id };
  const logs = await MyBooking.find(query).populate('userId', 'name email').populate('carId');
  res.json(logs);
};