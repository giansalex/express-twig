
exports.index = function (req, res, next) {

  res.render('index', { title: 'Express' });
}

exports.hello = function (req, res, next) {
  var name = req.params.name;
  if (!name) {
    name = 'Express';
  }

  res.render('index', { title: name });
}
