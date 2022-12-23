const express = require("express");
const router = express.Router();
const sequelize = require("sequelize");

const accountSID = process.env.AMSATT_TWILIO_ACCOUNT_SID;
const authToken = process.env.AMSATT_TWILIO_AUTHTOKEN;
const twilioNumber = process.env.AMSATT_TWILIO_NUMBER;
const client = require('twilio')(accountSID,authToken);
const { MessagingResponse } = require('twilio').twiml;

// GET localhost:3000/api/message/send
router.get('/send',(req, res, next) => {
    try {
        // const {
        //     message,
        //     receiver
        // } = req.body;
        // client.messages.create({
        //     body:message,
        //     from:twilioNumber,
        //     to:receiver
        // });
        console.log(twilioNumber);
        res.sendStatus(200);
    }catch(error){
        next(error);
    };
});

// POST localhost:3000/api/message/receive
router.post('/receive',(req, res, next) => {
    try {
        const message = req.body.Body;
        const twiml = new MessagingResponse();
        message==='1' ? twiml.message('Sick day requested. Please wait for a confirmation message from Admin.') : twiml.message('Please enter a 1 to proceed.')
        res.writeHead(200, {'Content-Type': 'text/xml'});
        res.end(twiml.toString());
    }catch(error){
        next(error);
    };
});

module.exports = router;