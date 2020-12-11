const Flight = require('../models/flight');

module.exports = {
  index,
  new: newFlight,
  create,
  details,
  createTicket,
  newDestination,
}

function index(req, res) {
  console.log('test');
  Flight.find({}, (err, flights) => {
    res.render('flights/index', {title: 'All Flights', flights: flights});
  });
}

function newFlight(req, res) {
  res.render('flights/new', {
    title: 'Add New Flight',
    err: ''
  });
}

function create(req, res) {
  const flight = new Flight(req.body)
  flight.save((err, flight) => {
    res.redirect(`/flights`);
  })
}

function details(req, res) {
  Flight.findById(req.params.id, (err, flight) => {
    console.log(flight);
    res.render('flights/details', {
      title: `Flight ${flight.flightNo}`,
      flight,
    })
  });
}

function createTicket(req, res) {
  Flight.findById(req.params.id, (err, flight) => {
    flight.tickets.push(req.body);
    flight.save((err, flight) => {
      res.redirect(`/flights/${req.params.id}/show`);
    });
  });
}

function newDestination(req, res) {
  res.render('destinations/new', {
    title: 'Add Destination'
  });
}

function createDestination(req, res) {

}