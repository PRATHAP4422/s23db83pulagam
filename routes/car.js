var express = require('express');
var router = express.Router();

/* GET CAR page. */
router.get('/', function(req, res, next) {
  res.render('car', { title: 'Search Results Car' });
});

module.exports = router;
