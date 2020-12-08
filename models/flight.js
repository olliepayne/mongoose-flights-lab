const mongoose = require('mongoose');
// optional shortcut to the mongoose.schema class
const Schema = mongoose.Schema;

const flightSchema = new Schema({
  airline: {type: String, enum: ['American', 'Southwest', 'United']},
  airport: {type: String, enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'], default: 'DEN'},
  flightNo: {type: Number, min: 10, max: 9999},
  departs: {type: Date, default: () => Date.now() + 365 * 24 * 60 * 60 * 1000},
});

// Compile the schema into a model and export it
module.exports = mongoose.model('Flight', flightSchema);