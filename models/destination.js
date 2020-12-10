const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
  airport: {type: String, unique: true}
});

module.exports = mongoose.model('Destination', destinationSchema);