let router = require('express').Router();
const { Router } = require('express');
let { read , create, update, destroy } = require('../controllers/Itinerary');
 
router.get('/', read );
router.post('/', create );
router.put('/:id', update);
router.delete('/:id', destroy);


module.exports = router;
