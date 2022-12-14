const mongoose = require('mongoose')
// const {studentRequirementsSchema} = require('./checklistModel')
// const {studentSchema} = require('./studentModel')
// const {adminSchema} = require('./adminModel')
// const {userSchema} = require('./userModel')

const Schema = mongoose.Schema

const postSchema = new mongoose.Schema({
   image: {
      type: String,
      required: true
   },
   caption: {
    type: String,
 },
   location: {
    type: String,
   },
   user_id: { type: Schema.Types.ObjectId,
    ref: "user",
    required: true
 },
   date: {
      type: Date,
      default: Date.now
   },
})

module.exports = {
   postSchema: postSchema,
   postModel: mongoose.model('post', postSchema, 'post'),
}