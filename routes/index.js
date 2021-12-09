const express = require('express');
const router = express.Router();
const authenticate = require('../middlewares/authentication');

// Add the required routes
router.use('/auth', require('./auth'));

router.use('/users', authenticate, require('./users'));
router.use('/games',authenticate,require('./games'));
router.use('/scoreboards', authenticate, require('./scoreboards'));

module.exports = router