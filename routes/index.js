var express = require('express');
var router = express.Router();
const Comment = require('../models/commentModel')
const Follower = require('../models/followerModel')
const Like = require('../models/likeModel')
const Post = require('../models/postModel')
const User = require('../models/userModel')
const {abc, follow, unfollow} = require('../controllers/mainController.js')

router.get('/posts', abc);

router.post('/follow', follow);

router.post('/unfollow', unfollow);



/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.send("haha")
});

module.exports = router;
