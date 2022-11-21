let router = require('express').Router();
let { createCity , readAll , readOne} = require('../controllers/city');

router.post('/', createCity);
router.get('/', readAll);
router.get('/:id', readOne);


module.exports = router;
