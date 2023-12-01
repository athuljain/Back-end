const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PSchema = new Schema({
  name: String,
  description: String,
});

const PModel = mongoose.model('Example', PSchema);

module.exports = PModel;