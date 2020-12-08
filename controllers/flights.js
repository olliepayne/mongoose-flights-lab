const Flight = require('../models/flight');

module.exports = {
  new: newFlight,
  create,
}

function newFlight(req, res) {
  res.render('flights/new', {
    title: 'Add New Flight',
    err: '',
  });
}

function create(req, res) {
  const flight = new Flight(req.body)
  flight.save((err, flight) => {
    res.redirect(`/flights/${flight._id}`);
  })
}