const express = require('express');
const router = express.Router();

router.use('/message', require('./message'));
router.use('/auth', require('./auth'));

module.exports = router;