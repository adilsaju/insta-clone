const mongoose = require('mongoose')
// const {studentRequirementsSchema} = require('./checklistModel')
const {userSchema} = require('./userModel')
const Schema = mongoose.Schema

const followerSchema = new mongoose.Schema({
    user_id: { type: Schema.Types.ObjectId,
        ref: "user"
      },
      follows: { type: Schema.Types.ObjectId,
       ref: "user"
     },
     date: {
      type: Date,
      default: Date.now
   },

})



module.exports = {
   followerSchema: followerSchema,
   followerModel: mongoose.model('follower', followerSchema, 'follower'),
}