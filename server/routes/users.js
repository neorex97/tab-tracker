var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  res.send({
    message : `Hello ${req.body.email}! your user was registered`
  });
});

module.exports = router;
