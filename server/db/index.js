const db = require("./db");
const User = require("./User");
const HSSchedule = require("./HSSchedule");
const MSSchedule = require("./MSSchedule");
const Day = require("./Day");
const Absence = require("./Absence");
const Coverage = require("./Coverage");
const Message = require("./Message");

User.hasOne(HSSchedule);
HSSchedule.belongsTo(User);

User.hasOne(MSSchedule);
MSSchedule.belongsTo(User);

Absence.belongsTo(User);
User.hasMany(Absence);

Coverage.belongsTo(User);
User.hasMany(Coverage);

Coverage.belongsTo(Day);
Day.hasMany(Coverage);

Absence.belongsTo(Day);
Day.hasMany(Absence);

// Teacher - HS schedule 1:1
// Teacher - MS schedule 1:1
// Teacher - Absence 1:M
// Teacher - Coverage 1:M
// Day - Absence 1:M
// Day - Coverage 1:M

module.exports = {
    db,
    User,
    HSSchedule,
    MSSchedule,
    Day,
    Absence,
    Coverage,
    Message
};