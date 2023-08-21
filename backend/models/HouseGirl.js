const mongoose = require('mongoose');

const houseGirlSchema = new mongoose.Schema({
  name: String,
  email: String,
  phoneNumber: String,
  dietaryRestrictions: [String],
  latePlateRequests: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'LatePlateRequest'
  }],
});

const HouseGirl = mongoose.model('HouseGirl', houseGirlSchema);

module.exports = HouseGirl;
