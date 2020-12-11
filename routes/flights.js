var express = require('express');
var router = express.Router();

// connect corresponding controller
const flightsCtrl = require('../controllers/flights');

router.get('/', flightsCtrl.index);
router.get('/new', flightsCtrl.new);
router.post('/', flightsCtrl.create);
router.get('/:id/details', flightsCtrl.details);

router.post('/:id/details', flightsCtrl.createTicket);

router.get('/destinations/new', flightsCtrl.newDestination);
router.post('/destinations/new', flightsCtrl.createDestination);

module.exports = router;
