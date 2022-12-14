const mongoose = require('mongoose')
// const {studentRequirementsSchema} = require('./checklistModel')
// const {studentSchema} = require('./studentModel')
// const {adminSchema} = require('./adminModel')
const Schema = mongoose.Schema

const commentSchema = new mongoose.Schema({
    post_id: { type: Schema.Types.ObjectId,
        ref: "post"
      },
      commented_user_id: { type: Schema.Types.ObjectId,
       ref: "user"
     },

   text: {
      type: String,
      required: true
   },


   date: {
      type: Date,
      default: Date.now
   },
})

module.exports = {
   commentSchema: commentSchema,
   postModel: mongoose.model('comment', commentSchema, 'comment'),
}