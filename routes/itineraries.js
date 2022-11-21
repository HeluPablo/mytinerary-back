let router = require('express').Router();
let { read , create, update } = require('../controllers/Itinerary');
 
router.get('/', read );
router.post('/', create );
router.put('/:id', update);


module.exports = router;
