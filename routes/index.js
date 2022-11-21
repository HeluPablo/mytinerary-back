var express = require('express');
var router = express.Router();
let city = require('./cities');
let user = require('./users');

router.use('/api/users', user);
router.use('/api/cities', city);


module.exports = router;