let router = require('express').Router();
let { createCity , readAll , readOne, update} = require('../controllers/city');

router.post('/', createCity);
router.get('/', readAll);
router.get('/:id', readOne);
router.put("/:id",update)


module.exports = router;
