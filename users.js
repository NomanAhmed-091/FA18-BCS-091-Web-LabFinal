var express = require('express');
var router = express.Router();

let data = ['ahmad','usman','faseeh','mujtaba'];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(data);
});

module.exports = router;
