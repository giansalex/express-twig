var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', { title: 'Express' });
});

router.get('/hello/:name?', function(req, res, next) {
  var name = req.params.name;
  if (!name) {
    name = 'Express';
  }
  res.render('index', { title: name });
});
module.exports = router;
