const mongoose = require('mongoose');

const hotelRoomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  capacity: {
    type: Number,
    required: true
  },
  amenities: {
    type: [String],
    required: true
  },
  bookedDates: {
    type: [Date],
    default: []
  },
  imageUrl: {
    type: String,
    required: true
  },
  isAvailable: {
    type: Boolean,
    default: true
  },
  createdDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('HotelRoom', hotelRoomSchema);
