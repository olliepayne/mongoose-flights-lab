var express = require('express');
var router = express.Router();

// connect corresponding controller
const flightsCtrl = require('../controllers/flights');

router.get('/', flightsCtrl.index);
router.get('/new', flightsCtrl.new);
router.post('/', flightsCtrl.create);
router.get('/:id/show', flightsCtrl.show);
router.post('/:id/show', flightsCtrl.createTicket);

module.exports = router;
