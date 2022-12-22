const express = require("express");
const router = express.Router();
const sequelize = require("sequelize");

router.get('/',(req, res, next) => {
    res.send('This route hit!');
});

module.exports = router;