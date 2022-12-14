const mongoose = require('mongoose')
// const {studentRequirementsSchema} = require('./checklistModel')
// const {studentSchema} = require('./studentModel')
// const {adminSchema} = require('./adminModel')
const Schema = mongoose.Schema

const likeSchema = new mongoose.Schema({
    post_id: { type: Schema.Types.ObjectId,
     ref: "post"
   },
   liked_user_id: { type: Schema.Types.ObjectId,
    ref: "user"
  },
})

module.exports = {
   likeSchema: likeSchema,
   postModel: mongoose.model('like', likeSchema, 'like'),
}