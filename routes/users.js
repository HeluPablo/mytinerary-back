let router = require('express').Router();
let { createUser } = require('../controllers/user');


router.post('/api/users', createUser);


module.exports = router;

