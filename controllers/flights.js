const Flight = require('../models/flight');

module.exports = {
  index,
  new: newFlight,
  create,
}

function index(req, res) {
  Flight.find({}, (err, flights) => {
    res.render('flights/index', {title: 'All Flights', flights: flights});
  });
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
    res.redirect(`/flights`);
  })
}