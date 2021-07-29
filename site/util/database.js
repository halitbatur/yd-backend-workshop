const { Sequelize } = require('sequelize');


module.exports = new Sequelize('yd-backend-workshop', 'halit', '24118572', {
  host: 'localhost',
  dialect: 'mysql'
});




