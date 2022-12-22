const express = require("express");
const router = express.Router();
const sequelize = require("sequelize");

const accountSID = 'AC7eab81725083f55a1fa723f10becc390';
const authToken = 'f2a00fb35148b94ecc2721827c0194c9';
const client = require('twilio')(accountSID,authToken);

router.get('/send',(req, res, next) => {
    try {
        const {
            message,
            sender,
            receiver
        } = req.body;
        client.messages.create({
            body:message,
            from:sender,
            to:receiver
        });
        res.sendStatus(200);
    }catch(error){
        next(error);
    };
});

module.exports = router;