const Car = require('../models/CarSchema');

exports.getAllCars = async (req, res) => {
  const cars = await Car.find();
  res.json(cars);
};

exports.addCar = async (req, res) => {
  const { model, plateNumber, seats } = req.body;
  const imagePath = req.file ? `/uploads/${req.file.filename}` : '';
  const newCar = await Car.create({ model, plateNumber, seats, image: imagePath });
  res.status(201).json(newCar);
};

exports.updateCar = async (req, res) => {
  const updateData = { ...req.body };
  if (req.file) updateData.image = `/uploads/${req.file.filename}`;
  const updatedCar = await Car.findByIdAndUpdate(req.params.id, updateData, { new: true });
  res.json(updatedCar);
};

exports.deleteCar = async (req, res) => {
  await Car.findByIdAndDelete(req.params.id);
  res.json({ message: 'Car item deleted' });
};