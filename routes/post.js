var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.sendFile('../public/post.html');
});

module.exports = router;