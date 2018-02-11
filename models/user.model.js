const Sequelize = require('sequelize').Sequelize;
var sequelize = require('../config/database').sequelize;
var bcrypt   = require('bcrypt-nodejs');

const User = sequelize.define('user', {
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  }
}, {
  classMethods: {
    generateHash : function(password) {
      return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
    }
  },
  instanceMethods: {
    validPassword: function(password) {
      return bcrypt.compareSync(password, this.password);
    }
  }
});

exports.User = User;
