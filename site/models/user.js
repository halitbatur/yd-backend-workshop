const { Sequelize, DataTypes } = require('sequelize');
const db = require("../util/database")

const User = db.define('User', {
  // Model attributes are defined here
  annotation_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
  },
}, {
    freezeTableName:true
});



module.exports = User;
