var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource in userrrrrrrrrrrrrrrrs');
});

router.get('/getusers', function(req, res, next) {
  res.send('getMethod is called');
});

module.exports = router;
