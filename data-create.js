const Comment = require('./models/commentModel')
const Follower = require('./models/followerModel')
const Like = require('./models/likeModel')
const Post = require('./models/postModel')
const User = require('./models/userModel')

require('dotenv').config()
const express = require('express')
const app = express();
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

// const studentRoute = require('./routes/studentRoute')
// const bodyParser = require('body-parser')

// const login = require('./routes/login')
// const errorHandler = require('./middlewares/errorMiddleware')
// const jwt = require('jsonwebtoken')

const port = process.env.PORT || 5002

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true } )
const db = mongoose.connection 
db.on('error',(error)=>console.error(error))
db.once('open',()=>console.error('connected to database'))




console.log("rannnn data addd()")

//data creation
async function addData() {

    

    // const u1 = await User.userModel.create({username: "adilsaju" , name: "Adil", email: "adilsaju@gmail.com", password: "12345678", profile_picture: "xyz" })
    // const u1 = await User.userModel.find({
    //     'username': "adilsaju",
    //   });
    const u1 = await User.userModel.findById("6397f8c42a646ca073b415a2");
    console.log(u1);
    const p1 = await Post.postModel.create({image: "xyz" , caption: "mountains calling", location: "123", user_id: u1 })


    console.log("data added");
    await mongoose.connection.close()
    console.log("closingggg");

}


addData()

exports.addData = addData