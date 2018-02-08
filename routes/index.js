var express = require('express');
var homeRoutes = require('./home');
var userRoutes = require('./users');

var router = express.Router();

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
  res.send('OK')
);

/* GET home page. */
router.use('/', homeRoutes);

// mount user routes at /auth
router.use('/users', userRoutes);

module.exports = router;
