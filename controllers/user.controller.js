var db = require('../data/db');

exports.index = function (req, res, next) {
  res.send('respond with a resource');
};

exports.connection = function (req, res, next) {
  db.connect(function (status) {
    var message = status ? 'can connect' : 'not connect';
    res.send(message);
  });
};