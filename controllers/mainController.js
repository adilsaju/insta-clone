const Comment = require('../models/commentModel')
const Follower = require('../models/followerModel')
const Like = require('../models/likeModel')
const Post = require('../models/postModel')
const User = require('../models/userModel')
const { request } = require('express');

const abc = async function(req, res, next) {
    // res.render('index', { title: 'Express' });
    try {
      const abc = await Post.postModel.find();
      res.json(abc);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
    // res.json("haha")
  }

  const follow = async function(req, res, next) {
    // res.render('index', { title: 'Express' });
    try {


      console.log(req.body.followedBy);
      console.log(req.body.followedTo);

      const followedBy = await User.userModel.find({
        "username": req.body.followedBy
      })
      const followedTo = await User.userModel.find({
        "username": req.body.followedTo
      })
      //create follower obj
      //create obj
      const folObj = {
        user_id: followedBy,
        follows: followedTo,
        date: Date.now
      };
      //update in db
      const request1 = await Follower.followerModel.create(
        folObj
      );
      console.log('request1:', request1);

      // const abc = await Follower.followerModel.find();
      res.json(request1);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
    // res.json("haha")
  }

  const unfollow = async function(req, res, next) {
    // res.render('index', { title: 'Express' });
    try {
      const abc = await Post.postModel.find();
      res.json(abc);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
    // res.json("haha")
  }
  module.exports = {
    abc,
    follow,
    unfollow
  };
  