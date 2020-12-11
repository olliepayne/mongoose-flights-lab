const Flight = require('../models/flight');
const Destination = require('../models/destination');

module.exports = {
  index,
  new: newFlight,
  create,
  details,
  createTicket,
  newDestination,
  createDestination
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
    Destination.find({}, (err, destinations) => {
      res.render('flights/details', {
        title: `Flight ${flight.flightNo}`,
        flight,
        destinations
      })
    });
  });
}

function createTicket(req, res) {
  Flight.findById(req.params.id, (err, flight) => {
    flight.tickets.push(req.body);
    flight.destination = req.body.destination;
    flight.save((err) => {
      res.redirect(`/flights/${req.params.id}/details`);
    });
  });
}

function newDestination(req, res) {
  Destination.find({}, (err, destinations) => {
    res.render('destinations/new', {title: 'All Destinations', destinations});
  });
}

function createDestination(req, res) {
  const newDestination = new Destination(req.body);
  newDestination.save((err, result) => {
    res.redirect('/flights/destinations/new');
  });
}