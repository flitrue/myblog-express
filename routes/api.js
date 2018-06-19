var express = require('express');
var posts = require('../models/posts');

var router = express.Router();

function getPosts(res) {
  posts.find(function (err, data) {

    if (err) {
      res.send(err);
    }

    return res.json(data);
  })
}

router.get('/posts', function (req, res, next) {
  getPosts(res)
});

module.exports = router;