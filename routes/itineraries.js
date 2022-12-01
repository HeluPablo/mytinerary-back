var express = require('express');
var router = express.Router();
let { read , create, update, destroy , readOne } = require('../controllers/Itinerary');
 
router.get('/', read );
router.post('/', create );
router.put('/:id', update);
router.get('/:id', readOne);
router.delete('/:id', destroy);


module.exports = router;
