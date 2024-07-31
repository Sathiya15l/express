var express = require('express');
var router = express.Router();
var userController=require('../controller/usercontroller');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/users', userController.getUsers);
module.exports = router;
