const mongoose = require('mongoose');

const houseBoySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  sororityHouse: String,
});

const HouseBoy = mongoose.model('HouseBoy', houseBoySchema);

module.exports = HouseBoy;
