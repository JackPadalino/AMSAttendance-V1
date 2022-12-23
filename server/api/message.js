const express = require("express");
const router = express.Router();
const sequelize = require("sequelize");
const { MessagingResponse } = require('twilio').twiml;
const { Message } = require("../db");
const {accountSID,authToken,twilioNumber} = require("../../bin/env");
const client = require('twilio')(accountSID,authToken);

// GET localhost:3000/api/message/send
router.get('/send',(req, res, next) => {
    try {
        const {
            message,
            receiver
        } = req.body;
        client.messages.create({
            body:message,
            from:twilioNumber,
            to:receiver
        });
        res.sendStatus(200);
    }catch(error){
        next(error);
    };
});

// POST localhost:3000/api/message/receive
router.post('/receive', async(req, res, next) => {
    try {
        const message = req.body.Body;
        const twiml = new MessagingResponse();
        if(message==='1'){
            twiml.message('Sick day requested. Please wait for a confirmation message from Admin.');
            await Message.create({
                content:'Some one called out!'
            });
        }else{
            twiml.message('Please enter a 1 to proceed.');
        };
        res.writeHead(200, {'Content-Type': 'text/xml'});
        res.end(twiml.toString());
    }catch(error){
        next(error);
    };
});

module.exports = router;