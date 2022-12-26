const db = require("./db");
const Sequelize = require("sequelize");

const Class = db.define("class", {
  // id: {
  //     type: UUID,
  //     primaryKey: true,
  //     defaultValue: UUIDV4
  // },
  name: {
    type: Sequelize.STRING,
    validate: {
        notEmpty: true,
    },
    allowNull: false,
  },
  period: {
    type: Sequelize.INTEGER,
    validate: {
        isInt: true,
        min:1,
        max:7
    },
    allowNull: false
  }
});

module.exports = Class;