const express = require("express");
const router = express.Router();
const sequelize = require("sequelize");
const { User,Class,Absence,Message,Day,Coverage } = require("../db");

// GET localhost:3000/api/classes
router.get('/',async(req, res, next) => {
    try {
        const classes = await Class.findAll({
            include:[User]
        });
        res.send(classes);
    }catch(error){
        next(error);
    };
});

module.exports = router;