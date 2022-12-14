const mongoose = require('mongoose')
// const {studentRequirementsSchema} = require('./checklistModel')

const userSchema = new mongoose.Schema({
   username: {
      type: String,
      required: true
   },
   name: {
    type: String,
    required: true
 },
   email: {
      type: String,
      required: true,
      unique: true,
      dropDups: true,
      index: true,
   },
   password: {
      type: String,
      required: true
   },

   profile_picture: {
      type: String,
      default: "https://storage.googleapis.com/yoke-e05d7.appspot.com/yoke%2F%2Faccount184822ff688.svg"
   },
   dateJoined: {
      type: Date,
      default: Date.now
   },
//    followers: studentRequirementsSchema,
})
userSchema.index({ 'email' : 1 }, { unique: true });
userSchema.index({ 'username' : 1 }, { unique: true });



module.exports = {
   userSchema: userSchema,
   userModel: mongoose.model('user', userSchema, 'user'),
}