const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PSchema = new Schema({
  name: String,
  description: String,
  price:Number,
});

const PModel = mongoose.model('Example', PSchema);

module.exports = PModel;