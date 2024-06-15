const mongoose = require('mongoose');

const HotelSchema = new mongoose.Schema({
  name: String,
  price: Number,
  rating: Number,
  location: String,
});

module.exports = mongoose.model('Hotel', HotelSchema);

