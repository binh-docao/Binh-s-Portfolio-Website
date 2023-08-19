const mongoose = require('mongoose');


const latePlateRequestSchema = new mongoose.Schema({
  date: Date,
  mealTime: String,
  comments: String,
  completed: Boolean,
  adminComments: String,
});

const houseGirlSchema = new mongoose.Schema({
  name: String,
  email: String,
  phoneNumber: String,
  dietaryRestrictions: [String],
  latePlateRequests: [latePlateRequestSchema],
});

const HouseGirl = mongoose.model('HouseGirl', houseGirlSchema);

module.exports = HouseGirl;
