let router = require('express').Router();
let { createCity , readAll} = require('../controllers/city');

router.post('/', createCity);
router.get('/', readAll);

module.exports = router;
