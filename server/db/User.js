const db = require("./db");
const Sequelize = require("sequelize");
// const { STRING, UUID, UUIDV4 } = db.Sequelize;
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const JWT = process.env.JWT;

const User = db.define("user", {
  // id: {
  //     type: UUID,
  //     primaryKey: true,
  //     defaultValue: UUIDV4
  // },
  firstName: {
    type: Sequelize.STRING,
    validate: {
        notEmpty: true,
    },
    allowNull: false,
  },
  lastName: {
    type: Sequelize.STRING,
    validate: {
        notEmpty: true,
    },
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
      notEmpty:true
    },
    unique: true,
  },
  phoneNumber: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
    unique: true
  },
  absent: {
    type: Sequelize.INTEGER,
    defaultValue:0
  },
  covered: {
    type: Sequelize.INTEGER,
    defaultValue:0
  },
  password: {
    type: Sequelize.STRING,
    // allowNull: false,
    validate: {
      notEmpty: true,
      //len: [10,18],
    },
  },
  role:{
    type:Sequelize.ENUM,
    values:['teacher','admin'],
    defaultValue:'teacher'
  }
});

module.exports = User;