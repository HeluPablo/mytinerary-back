let router = require('express').Router();
let { createCity} = require('../controllers/city');

router.post('/', createCity);


module.exports = router;
