let router = require('express').Router();
let { createCity , readAll , readOne, update, destroy} = require('../controllers/city');

router.post('/', createCity);
router.get('/', readAll);
router.get('/:id', readOne);
router.put('/:id',update)
router.delete("/:id", destroy)

module.exports = router;
