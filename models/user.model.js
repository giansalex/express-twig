const Sequelize = require('sequelize').Sequelize;
var sequelize = require('../data/db').sequelize;

const User = sequelize.define('user', {
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  }
});

exports.User = User;