const express = require("express");
const router = express.Router();
const sequelize = require("sequelize");

const accountSID = 'AC7eab81725083f55a1fa723f10becc390';
const authToken = 'f2a00fb35148b94ecc2721827c0194c9';
const apiKey = 'SK0b6b01a1233fa3bf8d522ecbf5b2ca1a';
const client = require('twilio')(accountSID,authToken);
const { MessagingResponse } = require('twilio').twiml;

// GET localhost:3000/api/message/send
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

// POST localhost:3000/api/message/receive
router.post('/receive',(req, res, next) => {
    try {
        const twiml = new MessagingResponse();
        twiml.message('BeEp BoOp BeEp!');
        res.type('text/xml').send(twiml.toString());
    }catch(error){
        next(error);
    };
});

module.exports = router;