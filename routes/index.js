var express = require('express');
var router = express.Router();
let city = require('./cities');
let user = require('./users');
let itineraries = require('./itineraries')

router.use('/api/users', user);
router.use('/api/cities', city);
router.use('/api/itineraries', itineraries);


module.exports = router;