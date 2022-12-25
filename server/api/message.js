const express = require("express");
const router = express.Router();
const sequelize = require("sequelize");
const { MessagingResponse } = require('twilio').twiml;
const { Teacher,Absence,Message,Day } = require("../db");
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
// NEED TO ADD THE ABILITY TO CHECK IF SOME ONE HAS ALREADY CALLED OUT ON THIS FUNCTION
router.post('/receive', async(req, res, next) => {
    try {
        const message = req.body.Body;
        const twiml = new MessagingResponse();
        if(message!=='1595'){
            twiml.message('Please enter 1595 to request a sick day/day off.');
        }else{
            const date = new Date();
            const year = date.getFullYear();
            const month = date.getMonth() + 1;
            const day = date.getDate();
            const dateStr = `${year}-${month}-${day}`;
            let todaysDate;
            const foundDate = await Day.findOne({
                where:{
                    date:dateStr
                }
            });
            if(foundDate){
                todaysDate = foundDate;
            }else{
                const newDate = await Day.create({
                    date:dateStr
                });
                todaysDate = newDate;
            };
            const teacher = await Teacher.findOne({
                where:{
                    phoneNumber:req.body.From
                }
            });
            if(!teacher){
                twiml.message('Sorry, you are not a registered staff member.');
            }else{
                const absence = await Absence.findOne({
                    where:{
                        teacherId:teacher.id,
                        dayId:todaysDate.id
                    }
                });
                if(absence){
                    twiml.message('It looks like you have already requested this day off.');
                }else{
                    await Absence.create({
                        teacherId:teacher.id,
                        dayId:todaysDate.id
                    });
                    twiml.message('Your request is confirmed.');
                };
            };
        };
        res.writeHead(200, {'Content-Type': 'text/xml'});
        res.end(twiml.toString());
    }catch(error){
        next(error);
    };
});

module.exports = router;