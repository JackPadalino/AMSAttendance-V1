const db = require("./db");
const Teacher = require("./Teacher");
const HSSchedule = require("./HSSchedule");
const MSSchedule = require("./MSSchedule");
const Day = require("./Day");
const Absence = require("./Absence");
const Coverage = require("./Coverage");
const Message = require("./Message");

Teacher.hasOne(HSSchedule);
HSSchedule.belongsTo(Teacher);

Teacher.hasOne(MSSchedule);
MSSchedule.belongsTo(Teacher);

Absence.belongsTo(Teacher);
Teacher.hasMany(Absence);

Coverage.belongsTo(Teacher);
Teacher.hasMany(Coverage);

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
    Teacher,
    HSSchedule,
    MSSchedule,
    Day,
    Absence,
    Coverage,
    Message
};